package com.sagem.dao;

import com.sagem.entity.Ligne;
import com.sagem.entity.Planning;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface LigneRepository extends JpaRepository<Ligne, Long> {
    @Query("select  l from Ligne  l inner join l.detai_plannings dp where dp.planning=:planning")
    List<Ligne> findByPlannings(Planning planning);

//  @Query("select new com.sagem.model.Stock(dp.cies, dp.code_produit, sum(dp.besoin)) from Detai_planning dp group by dp.cies  ")
//    public List<Stock> getStockByCie();



}
