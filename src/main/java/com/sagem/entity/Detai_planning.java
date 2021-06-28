package com.sagem.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Detai_planning extends AuditModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int besoin;
    private String code_produit;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date date;

    @ManyToOne

   /* @JoinColumns({
            @JoinColumn(name = "id_equipe", referencedColumnName = "id_equipe"),
            @JoinColumn(name = "equipe",referencedColumnName = "nom_equipe")})*/
    private Equipe equips;

    @ManyToOne
    private Cie cies;

    @ManyToOne
  //  @JsonBackReference(value = "ligne")
    private Ligne ligne;

    @ManyToOne
    private Planning planning;
}
