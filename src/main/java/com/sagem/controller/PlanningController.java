package com.sagem.controller;

import com.sagem.dao.PlanningRepository;
import com.sagem.entity.Planning;
import com.sagem.model.MessageResponse;
import com.sagem.services.PlanningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PlanningController {


    @Autowired
    private PlanningRepository planningRepository;
    @Autowired
    private PlanningService planningService;

    @PostMapping("/createPlanning")
    public MessageResponse CreatePlanning (@Valid @RequestBody Planning p){
        return  planningService.save(p);
    }

    @GetMapping("/allPlanning")
    public List<Planning> getAllEquipe(){
        return  planningRepository.findAll();
    }

    @GetMapping("/allPlanning/{id}")
    public Planning ListPlanning(@PathVariable(name = "id")Long id){
        return planningRepository.findById(id).get();
    }


    @PutMapping("/upPlanning/{id}")
    Planning ResponseEntity ( @Valid  @RequestBody Planning p,@PathVariable  Long id){
        return planningRepository.findById(id)
                .map(plan->{
                    plan.setDate_debut(p.getDate_debut());
                    plan.setDate_fin(p.getDate_fin());

                    return planningRepository.save(plan);
                }).orElseGet(()->{
                    p.setPlanning_id(id);
                    return planningRepository.save(p);
                });

    }

    @DeleteMapping("/allPlanning/{id}")
    public void delete(@PathVariable (name = "id")Long id){

        planningRepository.deleteById(id);
    }
}
