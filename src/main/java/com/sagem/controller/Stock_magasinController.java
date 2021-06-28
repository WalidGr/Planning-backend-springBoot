package com.sagem.controller;

import com.sagem.dao.Stock_magasinRepository;
import com.sagem.entity.StockMagasin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class Stock_magasinController {

    @Autowired
    private Stock_magasinRepository stock_magasinRepository;

    @PostMapping("/createStock")
    public StockMagasin CreateStock_magasin(@Valid @RequestBody StockMagasin st) {
        return stock_magasinRepository.save(st);
    }

    @GetMapping("/allStock")
    public List<StockMagasin> getAllStock_magasin() {
        return stock_magasinRepository.findAll();
    }

    @GetMapping("/allStock/{idstock}")
    public StockMagasin ListStock_magasin(@PathVariable(name = "idstock") Long idstock) {
        return stock_magasinRepository.findById(idstock).get();
    }


   /* @PutMapping("/upStock/{idstock}")
    StockMagasin ResponseEntity(@Valid @RequestBody StockMagasin e, @PathVariable Long idstock) {
        return stock_magasinRepository.findById(idstock)
                .map(eq -> {
                    eq.setCodecie(e.getCodecie());
                    eq.setCodeproduit(e.getCodeproduit());
                    eq.setQuantity(e.getQuantity());

                    return stock_magasinRepository.save(eq);
                }).orElseGet(() -> {
                    e.setIdstock(idstock);
                    return stock_magasinRepository.save(e);
                });

    }*/

    @DeleteMapping("/allStock/{idstock}")
    public void delete(@PathVariable(name = "idstock") Long idstock) {

        stock_magasinRepository.deleteById(idstock);
    }
}
