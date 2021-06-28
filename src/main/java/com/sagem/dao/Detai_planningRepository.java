package com.sagem.dao;

import com.sagem.entity.Detai_planning;
import com.sagem.entity.Equipe;
import com.sagem.entity.Ligne;
import com.sagem.entity.Planning;
import com.sagem.model.Detail;

import com.sagem.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface Detai_planningRepository extends JpaRepository<Detai_planning,Long> {

    public Optional<Detai_planning> findOneByDateAndPlanningAndLigneAndEquips(Date date, Planning planning, Ligne ligne, Equipe equipe);

    List<Detai_planning> findByPlanning(Planning p);
   @Query("select new com.sagem.model.Stock(dp.cies, dp.code_produit, sum(dp.besoin)) from Detai_planning dp group by dp.cies , dp.code_produit ")
    public List<Stock> getStock();

    @Query("select new com.sagem.model.Stock(dp.cies, dp.code_produit, sum(dp.besoin)) from Detai_planning dp group by dp.cies  ")
    public List<Stock> getStockByCie();


    @Query("select new com.sagem.model.Detail(dp.ligne, dp.code_produit, sum(dp.besoin)) from Detai_planning dp group by  dp.ligne  ")
    public List<Detail> getDetailByligne();

//  @Query(" select new com.sagem.model.Detail(dp.equips, dp.planning, sum(dp.besoin)) from  Detai_planning dp group by dp.equips ")
//    public List<Detail> getBesoinByLigne();

    @Query(" select  new com.sagem.model.Detail (dp.equips, dp.ligne, dp.id, dp.planning, sum(dp.besoin)) from  Detai_planning dp group by dp.planning.planning_id  order by dp.planning.planning_id asc  ")
    public List<Detail> getAllchamps();

    @Query(" select  new com.sagem.model.Detail (dp.equips, dp.ligne, dp.id, dp.planning, sum(dp.besoin)) from  Detai_planning dp group by dp.equips ,dp.planning order by dp.planning.planning_id")
    public List<Detail> getAllEquipe();
}
