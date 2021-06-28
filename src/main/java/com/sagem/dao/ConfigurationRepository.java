package com.sagem.dao;

import com.sagem.entity.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ConfigurationRepository extends JpaRepository<Configuration, Long> {
}
