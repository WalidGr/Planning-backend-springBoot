package com.sagem.services;

import com.sagem.model.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailSender {

    @Autowired
    private JavaMailSender emailSender;

    public void sendEmail(Mail mail) {




        MimeMessage message = emailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
          //  helper.setFrom("sagem.pfe@gmail.com");
            helper.setFrom("planningtest433@gmail.com");

            helper.setTo(InternetAddress.parse(mail.getEmails()));
            helper.setSubject(mail.getSubject());
            helper.setText(mail.getContent());

            FileSystemResource file
                    = new FileSystemResource(new File(mail.getFile()));
           helper.addAttachment("Planning.xlsx", file);



            emailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }


    }
}
