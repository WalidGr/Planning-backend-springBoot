package com.sagem.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Ligne extends AuditModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_ligne;
    private String nom_ligne;
    @JsonIgnore
    @OneToMany(mappedBy = "ligne")
    private List<Detai_planning> detai_plannings;


   /* @ManyToOne
    private PlanningType planning_type;*/
}
