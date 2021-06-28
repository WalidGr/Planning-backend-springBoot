package com.sagem.controller;

import com.sagem.dao.Planning_typeRepository;
import com.sagem.entity.PlanningType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class Planning_typeController {

    @Autowired
    private Planning_typeRepository planning_typeRepository;

    @PostMapping("/createPlanning_type")
    public PlanningType CreatePlanning_type (@Valid @RequestBody PlanningType pt){
        return  planning_typeRepository.save(pt);
    }

    @GetMapping("/allPlanning_type")
    public List<PlanningType> getAllPlanning_type(){
        return  planning_typeRepository.findAll();
    }

    @GetMapping("/allPlanning_type/{id}")
    public PlanningType ListPlanning_type(@PathVariable(name = "id")Long id){
        return planning_typeRepository.findById(id).get();
    }


    @PutMapping("/upPlanning_type/{id}")
    PlanningType ResponseEntity (@Valid  @RequestBody PlanningType pt, @PathVariable  Long id){
        return planning_typeRepository.findById(id)
                .map(eq->{
                    eq.setPtype_name(pt.getPtype_name());

                    return planning_typeRepository.save(eq);
                }).orElseGet(()->{
                    pt.setPtype_id(id);
                    return planning_typeRepository.save(pt);
                });

    }

    @DeleteMapping("/allPlanning_type/{id}")
    public void delete(@PathVariable (name = "id")Long id){

        planning_typeRepository.deleteById(id);
    }
}
