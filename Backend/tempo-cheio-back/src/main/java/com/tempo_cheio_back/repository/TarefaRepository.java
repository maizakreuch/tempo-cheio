package com.tempo_cheio_back.repository;

import com.tempo_cheio_back.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Integer> {
}
