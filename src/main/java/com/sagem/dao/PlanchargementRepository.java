package com.sagem.dao;

import com.sagem.entity.Planchargement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PlanchargementRepository extends JpaRepository<Planchargement, Long> {
}
