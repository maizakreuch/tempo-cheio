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
    private HistoricoService historicoService;

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
    public ResponseEntity<Historico> update(@PathVariable Integer id, @RequestBody Historico historico) {
        historico.setId(id); // Atualiza o ID do objeto para o ID na URL
        return ResponseEntity.ok(historicoService.save(historico));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        historicoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
