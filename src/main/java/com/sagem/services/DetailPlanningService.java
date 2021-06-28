package com.sagem.services;

import com.sagem.dao.*;
import com.sagem.entity.*;
import com.sagem.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class DetailPlanningService {
    @Autowired
    private PlanningRepository planningRepository;
    @Autowired
    private EquipeRepository equipeRepository;
    @Autowired
    private LigneRepository ligneRepository;
    @Autowired
    private Stock_magasinRepository stockMagasinRepository;

    @Autowired
    private Detai_planningRepository detai_planningRepository;

    public PlanningModel getDetails(Long id) {

        Planning planning = planningRepository.findById(id).orElse(null);
        /*  List<PlanningModel> planningModels = new ArrayList<>();*/
        PlanningModel planningModel = new PlanningModel();
        if (planning != null) {

            long daysBetween = ChronoUnit.DAYS.between(convertToLocalDate(planning.getDate_debut()), convertToLocalDate(planning.getDate_fin()));
            List<Date> dates = new ArrayList<>();
            for (int i = 0; i <= daysBetween; i++) {
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(planning.getDate_debut());
                calendar.add(Calendar.DAY_OF_MONTH, i);

                dates.add(calendar.getTime());


            }
            planningModel.setDates(dates);
            List<LineModel> lineModels = new ArrayList<>();
            ligneRepository.findAll().forEach(line -> {

                LineModel lineModel = new LineModel();
                lineModel.setLigne(line);


                List<LineEquipe> lineEquipes = new ArrayList<>();
                for (int i = 0; i <= daysBetween; i++) {

                    List<Detai_planning> detaiPlannings = new ArrayList<>();
                    for(Equipe eq : equipeRepository.findAll()) {

                        Detai_planning detai = detai_planningRepository.findOneByDateAndPlanningAndLigneAndEquips(dates.get(i),
                               planning, line, eq).orElse(null);
                        Detai_planning detai_planning = new Detai_planning();
                        if (detai == null) {
                            detai_planning.setDate(dates.get(i));
                            detai_planning.setEquips(eq);
                            detai_planning.setPlanning(planning);
                            detai_planning.setLigne(line);
                           detai_planning = detai_planningRepository.save(detai_planning);
                        } else {
                            detai_planning = detai;

                            lineModel.setTotal(lineModel.getTotal() + detai.getBesoin());
                        }
                        detaiPlannings.add(detai_planning);
                    }
                    LineEquipe lineEquipe = new LineEquipe();

                    lineEquipe.setDetaiPlannings(detaiPlannings);
                    lineEquipes.add(lineEquipe);
                }
                lineModel.setLineEquipes(lineEquipes);
                lineModels.add(lineModel);


            });

            planningModel.setLines(lineModels);


        }


        return planningModel;

    }

    private LocalDate convertToLocalDate(Date dateToConvert) {
        return dateToConvert.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
    }


    public Detai_planning save(Detai_planning detai_planning) {
       /* Detai_planning detai = detai_planningRepository.findOneByDateAndPlanningAndLigneAndEquips(detai_planning.getDate(),
                detai_planning.getPlanning(), detai_planning.getLigne(), detai_planning.getEquips()).orElse(null);
        if (detai != null) {
            detai_planning.setId(detai.getId());
        }*/
        Detai_planning detail = detai_planningRepository.save(detai_planning);
      /*  if(detail.getCies()!=null && detail.getCode_produit()!=null && detail.getBesoin()>0) {
            StockMagasin magasin = stockMagasinRepository.
                    findByCieAndCodeProduit(detail.getCies(), detail.getCode_produit());
            if(magasin==null) {
                magasin = new StockMagasin();
                magasin.setCie(detail.getCies());
                magasin.setCodeProduit(detail.getCode_produit());
                magasin.setQuantity(detail.getBesoin());
            } else {
                magasin.setQuantity(magasin.getQuantity() + detail.getBesoin());
            }
            stockMagasinRepository.save(magasin);
        }*/
        return detail;
    }

    public List<Stock> getStock() {
        return  detai_planningRepository.getStock();
    }

    public List<Stock> getStockByCie() {
        return  detai_planningRepository.getStockByCie();
    }

    public List<Detail> getDetailByligne(){
        return  detai_planningRepository.getDetailByligne();
    }

//    public  List<Detail> getBesoinByLigne(){
//        return  detai_planningRepository.getBesoinByLigne();
//    }
    public  List<Detail> getAllchamps() { return  detai_planningRepository.getAllchamps(); }
  public List<Detail> getAllEquipe() { return  detai_planningRepository.getAllEquipe(); }
}
