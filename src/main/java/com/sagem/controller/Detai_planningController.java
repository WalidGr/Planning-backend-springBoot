package com.sagem.controller;

import com.sagem.dao.Detai_planningRepository;
import com.sagem.entity.Detai_planning;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class Detai_planningController {

    @Autowired
    private Detai_planningRepository detai_planningRepository;

    @PostMapping("/createDetai_Planning")
    public Detai_planning CreateDetai_planning (@Valid @RequestBody Detai_planning d){
        return  detai_planningRepository.save(d);
    }

    @GetMapping("/allDetai_Planning")
    public List<Detai_planning> getAllDetai_planning(){
        return  detai_planningRepository.findAll();
    }

    @GetMapping("/allDetai_Planning/{id}")
    public Detai_planning ListDetai_planning(@PathVariable(name = "id")Long id){
        return detai_planningRepository.findById(id).get();
    }


    @PutMapping("/upDetai_planning/{id}")
    Detai_planning ResponseEntity ( @Valid  @RequestBody Detai_planning d,@PathVariable  Long id){
        return detai_planningRepository.findById(id)
                .map(de->{
                    de.setBesoin(d.getBesoin());
                    de.setCode_produit(d.getCode_produit());
                    de.setDate(d.getDate());

                    return detai_planningRepository.save(de);
                }).orElseGet(()->{
                    d.setId(id);
                    return detai_planningRepository.save(d);
                });

    }

    @DeleteMapping("/allDetai_Planning/{id}")
    public void delete(@PathVariable (name = "id")Long id){

        detai_planningRepository.deleteById(id);
    }

}
