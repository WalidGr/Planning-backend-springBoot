package com.sagem.dao;

import com.sagem.entity.Cie;
import com.sagem.entity.StockMagasin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface Stock_magasinRepository extends JpaRepository<StockMagasin, Long> {
    StockMagasin findByCieAndCodeProduit(Cie cies, String code_produit);
}
