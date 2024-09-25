package com.tempo_cheio_back.service;

import com.tempo_cheio_back.model.Historico;
import com.tempo_cheio_back.repository.HistoricoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoricoService {

    @Autowired
    HistoricoRepository historicoRepository;

    public List<Historico> findAll() {
        return historicoRepository.findAll();
    }

    public Historico findById(Integer id) {
        return historicoRepository.findById(id).orElse(null);
    }

    public Historico save(Historico historico) {
        return historicoRepository.save(historico);
    }

    public void delete(Historico historico) {
        historicoRepository.delete(historico);
    }
}