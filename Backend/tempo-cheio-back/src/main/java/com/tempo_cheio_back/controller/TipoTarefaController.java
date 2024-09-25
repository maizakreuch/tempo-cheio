package com.tempo_cheio_back.controller;

import com.tempo_cheio_back.model.TipoTarefa;
import com.tempo_cheio_back.service.TipoTarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/tipoTipoTarefa")
public class TipoTarefaController {

    @Autowired
    TipoTarefaService tipoTarefaService;

    @GetMapping
    public ResponseEntity<List<TipoTarefa>> findAll() {
        return ResponseEntity.ok(tipoTarefaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoTarefa> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(tipoTarefaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<TipoTarefa> create(@RequestBody TipoTarefa tipoTipoTarefa) {
        return ResponseEntity.ok(tipoTarefaService.save(tipoTipoTarefa));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoTarefa> update(@RequestBody TipoTarefa tipoTipoTarefa) {
        return ResponseEntity.ok(tipoTarefaService.save(tipoTipoTarefa));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<TipoTarefa> delete(@PathVariable Integer id) {
        TipoTarefa tipoTipoTarefa = tipoTarefaService.findById(id);
        tipoTarefaService.delete(tipoTipoTarefa);
        return ResponseEntity.ok(tipoTipoTarefa);
    }

}