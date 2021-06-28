package com.sagem;

import com.sagem.entity.AppRole;
import com.sagem.services.AccountService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.stream.Stream;

@EnableJpaAuditing
@SpringBootApplication
@EnableScheduling
public class SagemApplication {

    public static void main(String[] args) {
        SpringApplication.run(SagemApplication.class, args);
    }

/*    @Bean
    CommandLineRunner start(AccountService accountService){
        return args->{
            accountService.save(new AppRole(null,"EMPLOYEE"));
            accountService.save(new AppRole(null,"USER"));
            accountService.save(new AppRole(null,"ADMIN"));
            Stream.of("employee","user","admin","ali").forEach(un->{
                accountService.saveUser(un,"1234","1234","EMPLOYEE"
                          ,"SGM789","walid","gritli");
            });
            accountService.addRoleToUser("ali","USER");
            accountService.addRoleToUser("user","USER");
            accountService.addRoleToUser("admin","ADMIN");
            accountService.addRoleToUser("admin","ADMIN");

        };
    }*/


    @Bean
    BCryptPasswordEncoder getBCPE(){
        return new BCryptPasswordEncoder();
    }



}
