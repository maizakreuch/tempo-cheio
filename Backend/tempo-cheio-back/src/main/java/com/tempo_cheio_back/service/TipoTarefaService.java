package com.tempo_cheio_back.service;

import com.tempo_cheio_back.model.TipoTarefa;
import com.tempo_cheio_back.repository.TipoTarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TipoTarefaService {

    @Autowired
    TipoTarefaRepository tipoTarefaRepository;

    public List<TipoTarefa> findAll() {
        return tipoTarefaRepository.findAll();
    }

    public TipoTarefa findById(Integer id) {
        return tipoTarefaRepository.findById(id).orElse(null);
    }

    public TipoTarefa save(TipoTarefa tipoTarefa) {
        return tipoTarefaRepository.save(tipoTarefa);
    }

    public void delete(TipoTarefa tipoTarefa) {
        tipoTarefaRepository.delete(tipoTarefa);
    }
}