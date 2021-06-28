package com.sagem.dao;

import com.sagem.entity.Planning;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import java.util.Date;
import java.util.List;

@RepositoryRestResource
public interface PlanningRepository extends JpaRepository<Planning, Long> {
    @Query("select p from Planning p where p.date_debut between :date1 and :date2 or p.date_fin between :date1 and :date2")
    public List<Planning> findByDate(@Param("date1") Date date1 , @Param("date2") Date date2);


@Query("select  p from Planning  p order by p.planning_id DESC ")
    List<Planning> findLast(Pageable page);


}
