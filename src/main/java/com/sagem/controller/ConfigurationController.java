package com.sagem.controller;

import com.sagem.dao.ConfigurationRepository;
import com.sagem.entity.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ConfigurationController {

    @Autowired
    private ConfigurationRepository configurationRepository;

    @PostMapping("/createConfig")
    public Configuration CreateCie(@Valid @RequestBody Configuration con){
        return  configurationRepository.save(con);
    }

    @GetMapping("/allConfig")
    public List<Configuration> getAllConfig(){
        return  configurationRepository.findAll();
    }

     @PutMapping("/allConfig/{id}")
     Configuration ResponseEntity ( @Valid @RequestBody Configuration c,@PathVariable Long id){
       return configurationRepository.findById(id)
               .map(ci->{
                   ci.setChainecnx(c.getChainecnx());
                   ci.setEtat(c.getEtat());

          return configurationRepository.save(ci);
       }).orElseGet(()->{
           c.setId_configuration(id);
           return configurationRepository.save(c);
       });

    }

    @DeleteMapping("/allConfig/{id}")
    public void delete(@PathVariable(name = "id")Long id){

        configurationRepository.deleteById(id);
    }

}


