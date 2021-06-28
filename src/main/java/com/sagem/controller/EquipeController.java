package com.sagem.controller;

import com.sagem.dao.EquipeRepository;
import com.sagem.entity.Equipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class EquipeController {

    @Autowired
    private EquipeRepository equipeRepository;

    @PostMapping("/createEquipe")
    public Equipe CreateEquipe (@Valid @RequestBody Equipe e){
        return  equipeRepository.save(e);
    }

    @GetMapping("/allEquipe")
    public List<Equipe> getAllEquipe(){
        return  equipeRepository.findAll();
    }

    @GetMapping("/allEquipe/{id}")
    public Equipe ListEquipe(@PathVariable(name = "id")Long id){
        return equipeRepository.findById(id).get();
    }


    @PutMapping("/upEquipe/{id}")
    Equipe ResponseEntity ( @Valid  @RequestBody Equipe e,@PathVariable  Long id){
        return equipeRepository.findById(id)
                .map(eq->{
                    eq.setNom_equipe(e.getNom_equipe());
                    return equipeRepository.save(eq);
                }).orElseGet(()->{
                    e.setId_equipe(id);
                    return equipeRepository.save(e);
                });

    }

    @DeleteMapping("/allEquipe/{id}")
    public void delete(@PathVariable (name = "id")Long id){

        equipeRepository.deleteById(id);
    }
}
