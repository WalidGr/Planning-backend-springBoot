package com.sagem.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Planning extends AuditModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planning_id;

    private Date date_debut;

    private Date date_fin;

    @ManyToOne
    private PlanningType planningType;



    @JsonIgnore
    @OneToMany(mappedBy = "planning")
    private List<Detai_planning> detai_plannings;

}
