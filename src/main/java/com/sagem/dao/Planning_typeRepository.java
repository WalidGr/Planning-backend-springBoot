package com.sagem.dao;

import com.sagem.entity.PlanningType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface Planning_typeRepository extends JpaRepository<PlanningType,Long> {

}
