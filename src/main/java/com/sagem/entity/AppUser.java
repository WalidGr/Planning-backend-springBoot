package com.sagem.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class AppUser extends AuditModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column (unique = true)
    private String username;
    @JsonProperty (access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private boolean actived;
    private String matricule;
    private String nom;
    private String prenom;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<AppRole> roles;

}
