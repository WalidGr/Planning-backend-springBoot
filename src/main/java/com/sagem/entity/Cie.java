package com.sagem.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor

@Data
public class Cie extends AuditModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom_cie;


    @ManyToOne
    private Planchargement planchargement;
    @JsonIgnore
    @OneToMany(mappedBy = "cies")
    private List<Detai_planning> detai_plannings;

    @JsonIgnore
    @OneToMany(mappedBy = "cie")
    private List<StockMagasin> stock_magasins;

    public Cie(String nom_cie) {
        this.nom_cie=nom_cie;
    }

    @Override
    public String toString() {
        return "Cie{" +
                "nom_cie='" + nom_cie + '\'' +
                '}';
    }
}
