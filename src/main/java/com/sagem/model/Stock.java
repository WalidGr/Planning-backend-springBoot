package com.sagem.model;

import com.sagem.entity.Cie;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Stock {
    private Cie cie;
    private String codeProduit;
    private long quantite;
}
