package com.tempo_cheio_back.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Nonnull
    private String titulo;

    private String fonte;

    private Integer valorHora;

    private Integer valorMinuto;

    private Integer valorSegundo;
    
    @Nonnull
    private String medidaUnidade;

    private Integer quantidade;

    private boolean favorito;

    private String tipoTarefa;

}