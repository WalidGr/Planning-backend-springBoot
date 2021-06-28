package com.sagem.controller;

import com.sagem.dao.PlanchargementRepository;
import com.sagem.entity.Planchargement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PlanchargementController {

    @Autowired
    private PlanchargementRepository planchargementRepository;

    @PostMapping("/createPlanchargement")
    public Planchargement CreatePlanchargement (@Valid @RequestBody Planchargement pl){
        System.out.println(pl.toString());
        return  planchargementRepository.save(pl);
    }

    @GetMapping("/allPlanchargement")
    public List<Planchargement> getAllPlanchargement(){
        return  planchargementRepository.findAll();
    }



    @GetMapping("/allPlanchargement/{id}")
    public Planchargement ListPlanchargement(@PathVariable(name = "id")Long id){
        return planchargementRepository.findById(id).get();
    }


    @PutMapping("/upPlanchargement/{id_planchargement}")
    Planchargement ResponseEntity ( @Valid  @RequestBody Planchargement pl,@PathVariable  Long id_planchargement){
        return planchargementRepository.findById(id_planchargement)
                .map(plan->{
                    plan.setNom_planchargement(pl.getNom_planchargement());

                    return planchargementRepository.save(plan);
                }).orElseGet(()->{
                    pl.setId_planchargement(id_planchargement);
                    return planchargementRepository.save(pl);
                });

    }

    @DeleteMapping("/allPlanchargement/{id}")
    public void delete(@PathVariable (name = "id")Long id){

        planchargementRepository.deleteById(id);
    }
}
