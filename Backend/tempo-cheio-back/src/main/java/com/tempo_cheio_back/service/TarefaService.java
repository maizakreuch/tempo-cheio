package com.tempo_cheio_back.service;

import com.tempo_cheio_back.model.Tarefa;
import com.tempo_cheio_back.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TarefaService {

    @Autowired
    TarefaRepository tarefaRepository;

    public List<Tarefa> findAll() {
        return tarefaRepository.findAll();
    }

    public Tarefa findById(Integer id) {
        return tarefaRepository.findById(id).orElse(null);
    }

    public Tarefa save(Tarefa tarefa) {
        return tarefaRepository.save(tarefa);
    }

    public void delete(Tarefa tarefa) {
        tarefaRepository.delete(tarefa);
    }
}