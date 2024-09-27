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

    private String fonteFiltro;

    private String fonteTorneira;

    private String fonteMangueira;

    private Integer valorHora;

    private Integer valorMinuto;

    private Integer valorSegundo;
    
    @Nonnull
    private String medidaUnidade;

    private Integer quantidade;

    private boolean favorito;

    @OneToMany(mappedBy = "tarefaHistorico")
    private List<Historico> historicos;

    @ManyToOne
    @JoinColumn(name = "tipo_tarefa_id")
    private TipoTarefa tipoTarefa;

}