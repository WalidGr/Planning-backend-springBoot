package com.sagem.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlanningType extends AuditModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ptype_id;
    private String ptype_name;
/*
  @JsonIgnore
    @OneToMany(mappedBy = "planning_type")
    private List<Ligne> lignes ;
*/

   @JsonIgnore
    @OneToMany(mappedBy = "planningType")
    private List<Planning> plannings;
}
