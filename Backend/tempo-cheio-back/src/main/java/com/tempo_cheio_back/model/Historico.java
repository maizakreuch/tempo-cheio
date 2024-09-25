package com.tempo_cheio_back.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Historico {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private Date data;

    private String fonte;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuarioHistorico;

    @ManyToOne
    @JoinColumn(name = "tarefa_id")
    private Tarefa tarefaHistorico;

}