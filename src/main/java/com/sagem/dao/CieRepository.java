package com.sagem.dao;

import com.sagem.entity.Cie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource @Repository
public interface CieRepository extends JpaRepository<Cie ,Long> {
    //List<Cie> findByPlanchargementId (Long id_planchargement);
 //   Optional<Cie> findByIdAndIdplanchargement(Long id ,Long id_planchargement);


}
