package com.sagem.services;

import com.sagem.dao.*;
import com.sagem.entity.AppRole;
import com.sagem.entity.AppUser;
import com.sagem.entity.Detai_planning;
import com.sagem.entity.Planning;
import com.sagem.model.LineEquipe;
import com.sagem.model.LineModel;
import com.sagem.model.Mail;
import com.sagem.model.PlanningModel;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class JobEmail {

    @Autowired
    private EmailSender emailSender;
    @Autowired
    private AppRoleRepository roleRepository;
    @Autowired
    private AppUserRepository userRepository;
    @Autowired
    private PlanningRepository planningRepository;
    @Autowired
    private Detai_planningRepository detaiPlanningRepository;
    @Autowired
    private LigneRepository ligneRepository;
    @Autowired
    private EquipeRepository equipeRepository;
    @Autowired
    private DetailPlanningService detailPlanningService;

    @Scheduled(fixedDelay = 10000000)
    public void sendPlanning() {
        System.out.println("***************");
        try {
            SimpleDateFormat fm = new SimpleDateFormat("dd-MMM-yyyy");
            Boolean result = false;
            Mail mail = new Mail();
            String emails = "";

            AppRole role = roleRepository.findByRoleName("ADMIN");
            List<AppUser> admins = userRepository.findByRoles(role);
            for (AppUser user : admins) {
                emails += user.getUsername() + ",";
            }
            mail.setEmails(emails);
            // System.out.println("mail cc "+emails_cc);

            // System.out.println("mail to "+emails);
            Planning p = planningRepository.findLast(PageRequest.of(0, 1)).get(0);
            String subject = "Planning de production du " + fm.format(p.getDate_debut()) + " à "
                    + fm.format(p.getDate_fin());


            mail.setSubject(subject);
            mail.setContent("Bonjour, \n Vous trouvez en pièce jointe le planing");

            PlanningModel planningModel = detailPlanningService.getDetails(p.getPlanning_id());


            XSSFWorkbook workbook = new XSSFWorkbook();
            XSSFSheet sheet = workbook.createSheet("Planning");


            CellStyle headerStyle = workbook.createCellStyle();
            headerStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            XSSFFont font = workbook.createFont();
            font.setFontName("Arial");
            font.setFontHeightInPoints((short) 10);

            /*   font.setBold(true);*/
            headerStyle.setFont(font);
            int columnCount = 1;
            Row header = sheet.createRow(0);

            int firstCell = 1;
            for (int i = 0; i <= 6; i++) {
                int lastCell = firstCell + 2;
                Cell cell = header.createCell(firstCell);
                cell.setCellStyle(headerStyle);

                cell.setCellValue(fm.format(planningModel.getDates().get(i)));
                sheet.addMergedRegion(new CellRangeAddress(0, 0, firstCell, lastCell));
                firstCell = lastCell + 1;
            }


            columnCount = 0;
            int rowCount = 1;
            for (LineModel line : planningModel.getLines()) {
                Row body = sheet.createRow(rowCount++);
                Cell cell = body.createCell(columnCount);
                cell.setCellValue(line.getLigne().getNom_ligne());
                int colCountDetail = 1;
                int rowDeatilCount = 1;
                for (LineEquipe equipe : line.getLineEquipes()) {


                    for (Detai_planning detail : equipe.getDetaiPlannings()) {
                        sheet.autoSizeColumn(colCountDetail);
                        Cell cellDetail = body.createCell(colCountDetail++);
                        String value = detail.getEquips().getNom_equipe() + "\r\n\r\n" +
                                "Cie:" + detail.getCies() + "\r\nCodeProduit:" + detail.getCode_produit()
                                + "\r\nBesoin:" + detail.getBesoin();

                        cellDetail.setCellValue(value);
                        CellStyle cs = workbook.createCellStyle();
                        cs.setWrapText(true);
                        cellDetail.setCellStyle(cs);

                    }

                }
                rowDeatilCount = 1;
                columnCount = 0;
            }

            String path = "Planning" + System.currentTimeMillis() + ".xlsx";
            FileOutputStream outputStream = new FileOutputStream(path);
            workbook.write(outputStream);
            mail.setFile(path);
            emailSender.sendEmail(mail);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /* @Scheduled(cron = "0 0/1 * * * *")*/
   /* public Boolean sendPlanningqqqq() {
        System.out.println("hello");
        SimpleDateFormat fm = new SimpleDateFormat("dd-MMM-yyyy");
        Boolean result = false;
        Mail mail = new Mail();
        String emails = "";

        AppRole role = roleRepository.findByRoleName("ADMIN");
        List<AppUser> admins = userRepository.findByRoles(role);
        for (AppUser user : admins) {
            emails += user.getUsername();
        }
        mail.setEmails(emails);
        // System.out.println("mail cc "+emails_cc);

        // System.out.println("mail to "+emails);
        Planning p = planningRepository.findLast(PageRequest.of(0, 1)).get(0);
        String subject = "Planning de production du " + fm.format(p.getDate_debut()) + " à "
                + fm.format(p.getDate_fin());


        mail.setSubject(subject);
        int f = 0;
        String text1 = "";
        String texteq1 = "<td style= \"background: #F8F8F8\"></td>";
        String texteq2 = "<td style= \"background: #F8F8F8\"></td>";
        String texteq3 = "<td style= \"background: #F8F8F8\"></td>";
        String text = "<html><head>" + "<title>Planning</title>" + "<style>" + "table { "
                + "  border-collapse: separate; " + "  border-spacing: 0; " + "} " + "th, " + "td { "
                + "  padding: 10px 15px; " + "} " + "thead { " + "  background: #395870; " + "  color: #fff; " + "} "
                + "tbody tr:nth-child(even) { " + "  background: #f0f0f2; " + "} " + "td { "
                + "  border-bottom: 1px solid #cecfd5; " + "  border-right: 1px solid #cecfd5; " + "} "
                + "dt:before {content: '-';} dd{margin-left:10px;}" + "</style>" + "</head>\n" + "<body>"
                + "<p>Bonjour,</p>" + "<p>Ceci est le planning de prod entre " + fm.format(p.getDate_debut()) + " et "
                + fm.format(p.getDate_fin()) + "</p>" + "<table style=\"table-layout: fixed;\r\n"
                + "  width: 100%; \">";
        text += "<thead><tr><th >Ligne</th>";
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(p.getDate_debut());

        Calendar endCalendar = new GregorianCalendar();
        endCalendar.setTime(p.getDate_fin());

        SimpleDateFormat fmt = new SimpleDateFormat("dd-MMM-yyyy");
        SimpleDateFormat fmt1 = new SimpleDateFormat("dd-MMM-yyyy");
        int nbreDate = 0;
        while (calendar.before(endCalendar)) {

            Date result1 = calendar.getTime();
            fmt.setCalendar(calendar);
            String dateFormatted = fmt.format(result1);
            System.out.println(dateFormatted);
            text += "    <th colspan=\"3\" >" + dateFormatted + "</th>" + "    <th>Total</th>";
            // datesInRange.add(result1);
            calendar.add(Calendar.DATE, 1);
            nbreDate++;
        }
        // pour la dernière date
        endCalendar.setTime(p.getDate_fin());
        Date result1 = endCalendar.getTime();
        fmt.setCalendar(endCalendar);
        String dateFormatted = fmt.format(result1);
        // System.out.println(dateFormatted);
        text += "    <th colspan=\"3\" >" + dateFormatted + "</th>" + "    <th>Total</th>";

        text += "</tr></thead><tbody>";
        calendar.setTime(p.getDate_debut());
        endCalendar.setTime(p.getDate_fin());
        int quantity = 0;
        List<Detai_planning> details = detaiPlanningRepository.findByPlanning(p);
        // System.out.println(details.size());// <td>" + det.getLigne().getNomligne() +
        // "</td>" + "
        List<Ligne> lignes = ligneRepository.findByPlannings(p);

        System.out.println(p.getPlanning_id() + "********************" + lignes.size());

        for (Ligne ligne : lignes) {
            // System.out.println("ligne " + ligne.getNomligne());
            text += "    <tr><td rowspan=\"2\" style=\"background: #D2D2D7;\">" + ligne.getNom_ligne() + "</td>";
            for (int i = 0; i <= nbreDate; i++) {
                text += "<td style=\"background: #D2D2D7\">Equipe1</td>"
                        + "          <td style=\"background: #D2D2D7\">Equipe2</td>"
                        + "<td style=\"background: #D2D2D7\">Equipe3</td><td></td>";
            }
            text += "        </tr><tr>";
            ///// Fin premier ligne
            Calendar calendar1 = new GregorianCalendar();
            calendar1.setTime(p.getDate_debut());

            Calendar endCalendar1 = new GregorianCalendar();
            endCalendar1.setTime(p.getDate_fin());
            while (calendar1.before(endCalendar1)) {
                f++;
                String dateCalendar1 = fmt.format(calendar1.getTime());
                // System.out.println("date calendar " + dateCalendar1);
                // text += "<td>";
                String texteq = "<td style= \"background: #F8F8F8\"></td>";

                List<Equipe> eq = equipeRepository.findByPlannings(p);

                text1 = "";
                texteq1 = "<td style= \"background: #F8F8F8\"></td>";
                texteq2 = "<td style= \"background: #F8F8F8\"></td>";
                texteq3 = "<td style= \"background: #F8F8F8\"></td>";
                texteq1 = "<td>";
                texteq2 = "<td>";
                texteq3 = "<td>";
                for (Detai_planning det : details) {
                    String dateDetail = fmt1.format(det.getDate());
                    // System.out.println("date calendar " + dateCalendar1);
                    // System.out.println("date details " + dateDetail);
                    for (Equipe equipe : eq) {
                        if (dateDetail.equals(dateCalendar1)
                                && det.getLigne().getNom_ligne().equals(ligne.getNom_ligne())) {

                            if (equipe.getId_equipe() == det.getEquips().getId_equipe()
                                    && equipe.getNom_equipe().equals("Eq1")) {
                                if (det.getCies() != null && det.getCode_produit() != null && det.getBesoin() > 0)
                                    texteq1 += "<dt>- Code produit: " + det.getCode_produit() + "</dt>" + "<dt>-"
                                            + det.getCies().getNom_cie() + "</dt>" + "<dt>-" + det.getBesoin()
                                            + "</dt><hr width=\"50%\" color=#D2D2D7>";
                                if (det.getBesoin() > 0)
                                    quantity += det.getBesoin();
                            } else if (equipe.getId_equipe() == det.getEquips().getId_equipe()
                                    && det.getEquips().getNom_equipe().equals("Eq2")) {
                                if (det.getCies() != null && det.getCode_produit() != null && det.getBesoin() > 0)
                                    texteq2 += "<dt>- Code produit: " + det.getCode_produit() + "</dt>" + "<dt>-"
                                            + det.getCies().getNom_cie() + "</dt>" + "<dt>-" + det.getBesoin()
                                            + "</dt><hr width=\"50%\" color=#D2D2D7>";
                                if (det.getBesoin() > 0)
                                    quantity += det.getBesoin();
                            } else if (equipe.getId_equipe() == det.getEquips().getId_equipe()
                                    && det.getEquips().getNom_equipe().equals("Eq3")) {
                                if (det.getCies() != null && det.getCode_produit() != null && det.getBesoin() > 0)
                                    texteq3 += "<dt>- Code produit: " + det.getCode_produit() + "</dt>" + "<dt>-"
                                            + det.getCies().getNom_cie() + "</dt>" + "<dt>-" + det.getBesoin()
                                            + "</dt><hr width=\"50%\" color=#D2D2D7>";
                                if (det.getBesoin() > 0)
                                    quantity += det.getBesoin();

                            }

                        }

                    }

                }
                texteq1 += "</td>";
                texteq2 += "</td>";
                texteq3 += "</td>";
                text1 += texteq1 + texteq2 + texteq3;
                text1 += "          <td>" + quantity + "</td>";
                text += text1;

                // System.out.println("colone " + f + text1);

                quantity = 0;
                calendar1.add(Calendar.DATE, 1);
            }

            // pour la dernière date (colonne)
            quantity = 0;
            endCalendar.setTime(p.getDate_fin());
            fmt.setCalendar(endCalendar);
            String end = fmt.format(endCalendar.getTime());
            // text += "<td>";
            text1 = "";
            String texteq = "<td style= \"background: #F8F8F8\"></td>";

            List<Equipe> eq = equipeRepository.findByPlannings(p);
            texteq1 = "<td style= \"background: #F8F8F8\"></td>";
            texteq2 = "<td style= \"background: #F8F8F8\"></td>";
            texteq3 = "<td style= \"background: #F8F8F8\"></td>";
            texteq1 = "<td>";
            texteq2 = "<td>";
            texteq3 = "<td>";
            text1 = "";
            for (Detai_planning det : details) {
                String dateDetail = fmt1.format(det.getDate());
                // System.out.println("date enddetails " + dateDetail);
                // System.out.println("date endcalendar " + end);
                if (dateDetail.equals(end) && det.getLigne().getNom_ligne().equals(ligne.getNom_ligne())) {
                    for (Equipe equipe : eq) {
                        if (equipe.getId_equipe() == det.getEquips().getId_equipe()
                                && equipe.getNom_equipe().equals("Eq1")) {
                            if (det.getCies() != null && det.getCode_produit() != null && det.getBesoin() > 0)
                                texteq1 += "<dt>- Code produit: " + det.getCode_produit() + "</dt>" + "<dt>-"
                                        + det.getCies().getNom_cie() + "</dt>" + "<dt>-" + det.getBesoin()
                                        + "</dt><hr width=\"50%\" color=#D2D2D7>";
                            if (det.getBesoin() > 0)
                                quantity += det.getBesoin();
                        } else if (equipe.getId_equipe() == det.getEquips().getId_equipe()
                                && equipe.getNom_equipe().equals("Eq2")) {
                            if (det.getCies() != null && det.getCode_produit() != null && det.getBesoin() > 0)
                                texteq2 += "<dt>- Code produit: " + det.getCode_produit() + "</dt>" + "<dt>-"
                                        + det.getCies().getNom_cie() + "</dt>" + "<dt>-" + det.getBesoin()
                                        + "</dt><hr width=\"50%\" color=#D2D2D7>";
                            if (det.getBesoin() > 0)
                                quantity += det.getBesoin();
                        } else if (equipe.getId_equipe() == det.getEquips().getId_equipe()
                                && equipe.getNom_equipe().equals("Eq3")) {
                            if (det.getCies() != null && det.getCode_produit() != null && det.getBesoin() > 0)
                                texteq3 += "<dt>- Code produit: " + det.getCode_produit() + "</dt>" + "<dt>-"
                                        + det.getCies().getNom_cie() + "</dt>" + "<dt>-" + det.getBesoin()
                                        + "</dt><hr width=\"50%\" color=#D2D2D7>";
                            if (det.getBesoin() > 0)
                                quantity += det.getBesoin();
                        }

                    }

                }

            }
            texteq1 += "</td>";
            texteq2 += "</td>";
            texteq3 += "</td>";
            text1 += texteq1 + texteq2 + texteq3;
            text1 += "          <td>" + quantity + "</td>";
            text += text1;

            quantity = 0;
            // System.out.println("dernier colone " + text1 + " <td>" + quantity + "</td>");
            text += "</tr>";

        }
        text += "</tbody></table></html>";

        mail.setContent(text);

        emailSender.sendEmail(mail);
        result = true;
        // sendSimpleMessage(mail);
        // }
        return result;

    }*/


}
