package com.sagem.dao;

import com.sagem.entity.AppRole;
import com.sagem.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface AppUserRepository extends JpaRepository <AppUser , Long> {
    public AppUser findByUsername(String username);

    boolean existsByIdAndUsername(Long id, String username);

    boolean existsByUsername(String username);

    List<AppUser> findByRoles(AppRole role);
}
