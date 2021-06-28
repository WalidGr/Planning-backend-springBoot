package com.sagem.model;

import com.sagem.entity.Equipe;
import com.sagem.entity.Ligne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LineModel {
    private Ligne ligne;
    private List<LineEquipe> lineEquipes;
    private long total;

    public LineModel(Ligne ligne, long total) {
        this.ligne = ligne;
        this.total = total;
    }

    public LineModel(List<LineEquipe> lineEquipes, long total) {
        this.lineEquipes = lineEquipes;
        this.total = total;
    }
}
