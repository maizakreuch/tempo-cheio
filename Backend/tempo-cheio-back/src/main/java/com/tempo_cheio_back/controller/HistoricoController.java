package com.tempo_cheio_back.controller;

import com.tempo_cheio_back.model.Historico;
import com.tempo_cheio_back.service.HistoricoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/historico")
public class HistoricoController {

    @Autowired
    HistoricoService historicoService;

    @GetMapping
    public ResponseEntity<List<Historico>> findAll() {
        return ResponseEntity.ok(historicoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Historico> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(historicoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Historico> create(@RequestBody Historico historico) {
        return ResponseEntity.ok(historicoService.save(historico));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Historico> update(@RequestBody Historico historico) {
        return ResponseEntity.ok(historicoService.save(historico));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Historico> delete(@PathVariable Integer id) {
        Historico historico = historicoService.findById(id);
        historicoService.delete(historico);
        return ResponseEntity.ok(historico);
    }

}