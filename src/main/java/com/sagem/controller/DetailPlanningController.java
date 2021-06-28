package com.sagem.controller;

import com.sagem.entity.Detai_planning;
import com.sagem.model.Detail;
import com.sagem.model.LineModel;
import com.sagem.model.PlanningModel;
import com.sagem.model.Stock;
import com.sagem.services.DetailPlanningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/detailPlanning")
@CrossOrigin("*")
public class DetailPlanningController {

    @Autowired
    private DetailPlanningService detailPlanningService;

    @GetMapping("/{id}")
    public PlanningModel getDetails(@PathVariable Long id) {
        return  detailPlanningService.getDetails(id);
    }

    @PostMapping
    public Detai_planning saveOrUpdate(@RequestBody Detai_planning detai_planning) {
        return  detailPlanningService.save(detai_planning);
    }

    @GetMapping("/stock")
    public List<Stock> getStock() {
        return  detailPlanningService.getStock();
    }

    @GetMapping("/stock/cie")
    public List<Stock> getStockCie() {
        return  detailPlanningService.getStockByCie();
    }

    @GetMapping("/Detail/ligne")
    public List<Detail> getDetailByligne(){
        return  detailPlanningService.getDetailByligne();
    }

//    @GetMapping("/Detail/besoin")
//    public List<Detail> getBesoinByLigne(){
//        return  detailPlanningService.getBesoinByLigne();
//    }

    @GetMapping("/all")
   public  List<Detail> getAllchamps() { return  detailPlanningService.getAllchamps(); }

    @GetMapping("/equipe")
    public  List<Detail> getAllEquipe() { return  detailPlanningService.getAllEquipe(); }
}
