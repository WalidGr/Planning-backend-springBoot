package com.sagem.controller;

import com.sagem.dao.CieRepository;
import com.sagem.dao.PlanchargementRepository;
import com.sagem.entity.Cie;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;

@RestController
public class CieController {

    @Autowired
    private CieRepository cieRepository;

    @Autowired
    private PlanchargementRepository planchargementRepository;
/*
  @GetMapping("/planchargements/{id_planchargement}/cii")
  public Optional<Cie> getCiesByPlanchargement(@PathVariable(value = "id_planchargement") Long id_planchargement){
     // return cieRepository.findByPlanchargementId(id_planchargement);
      return cieRepository.findById(id_planchargement);
  }*/

    @PostMapping("/planchargements/cii")
     public Cie createCie(
                          @Valid @RequestBody Cie cie) {
              return cieRepository.save(cie);



       }



  /*
    @PostMapping("/planchargements/{id_planchargement}/cii")
     public Cie createCie(@PathVariable(value = "id_planchargement") Long id_planchargement,
                          @Valid @RequestBody Cie cie) throws ResourceNotFoundException{
          return planchargementRepository.findById(id_planchargement).map(planchargement -> {
              cie.setPlanchargement(planchargement);
              return cieRepository.save(cie);
          }).orElseThrow(() -> new ResourceNotFoundException("plans not found"));

    }
   */
    @PostMapping("/createCie")
    public Cie CreateCie(@Valid @RequestBody Cie c){
        return  cieRepository.save(c);
    }


    @GetMapping("/allCie")
   // @RequestMapping(value="/allCie",method=RequestMethod.GET)
    public List<Cie> getList(){
        return  cieRepository.findAll();
    }

    @GetMapping("/allCie/{id}")
    public Cie ListCie(@PathVariable(name = "id")Long id){
        return cieRepository.findById(id).get();
    }

  /*  @PutMapping("/allCie/{id}")
    public Cie update(@PathVariable(name = "id")Long id,@RequestBody Cie c){
        c.setNom_cie(c.getNom_cie());
        return cieRepository.save(c);
    }*/



    @PutMapping("/allCie/{id}")
    Cie ResponseEntity ( @Valid @RequestBody Cie c,@PathVariable Long id){
       return cieRepository.findById(id)
               .map(ci->{
           ci.setNom_cie(c.getNom_cie());
          return cieRepository.save(ci);
       }).orElseGet(()->{
           c.setId(id);
           return cieRepository.save(c);
       });

    }

    @DeleteMapping("/allCie/{id}")
    public void delete(@PathVariable(name = "id")Long id){

        cieRepository.deleteById(id);
    }



}
