package com.sagem.controller;

import com.sagem.dao.LigneRepository;
import com.sagem.entity.Ligne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class LigneController {

    @Autowired
    private LigneRepository ligneRepository;

    @PostMapping("/createLigne")
    public Ligne CreateLigne (@Valid @RequestBody Ligne l){
        return  ligneRepository.save(l);
    }

    @GetMapping("/allLigne")
    public List<Ligne> getAllLigne(){
        return  ligneRepository.findAll();
    }

    @GetMapping("/allLigne/{id}")
    public Ligne ListLigne(@PathVariable(name = "id")Long id){
        return ligneRepository.findById(id).get();
    }


    @PutMapping("/upLigne/{id}")
    Ligne ResponseEntity ( @Valid  @RequestBody Ligne l,@PathVariable  Long id){
        return ligneRepository.findById(id)
                .map(le->{
                    le.setNom_ligne(l.getNom_ligne());
                    return ligneRepository.save(le);
                }).orElseGet(()->{
                    l.setId_ligne(id);
                    return ligneRepository.save(l);
                });

    }

    @DeleteMapping("/allLigne/{id}")
    public void delete(@PathVariable (name = "id")Long id){

        ligneRepository.deleteById(id);
    }
}
