package com.sagem.model;


import com.sagem.entity.Cie;
import com.sagem.entity.Equipe;
import com.sagem.entity.Ligne;
import com.sagem.entity.Planning;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Detail {
    private long id;
    private Equipe equipe;
    private Ligne ligne;
    private Cie cie;
    private Planning planning;
    private String codeProduit;
    private long quantite;

    public Detail(Equipe equipe, Ligne ligne, Long id, Planning planning, long quantite) {
        this.equipe = equipe;
        this.ligne = ligne;
        this.id = id;
        this.planning = planning;
        this.quantite = quantite;
    }

    public Detail(Ligne ligne, String codeProduit, long quantite) {

        this.ligne = ligne;
        this.codeProduit = codeProduit;
        this.quantite = quantite;
    }

    public Detail(Equipe equipe, Planning planning, long quantite) {
        this.equipe = equipe;
        this.planning = planning;
        this.quantite = quantite;
    }
}
