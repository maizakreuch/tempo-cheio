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
    TipoTarefaService tipoTipoTarefaService;

    @GetMapping
    public ResponseEntity<List<TipoTarefa>> findAll() {
        return ResponseEntity.ok(tipoTipoTarefaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoTarefa> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(tipoTipoTarefaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<TipoTarefa> create(@RequestBody TipoTarefa tipoTipoTarefa) {
        return ResponseEntity.ok(tipoTipoTarefaService.save(tipoTipoTarefa));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoTarefa> update(@RequestBody TipoTarefa tipoTipoTarefa) {
        return ResponseEntity.ok(tipoTipoTarefaService.save(tipoTipoTarefa));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<TipoTarefa> delete(@PathVariable Integer id) {
        TipoTarefa tipoTipoTarefa = tipoTipoTarefaService.findById(id);
        tipoTipoTarefaService.delete(tipoTipoTarefa);
        return ResponseEntity.ok(tipoTipoTarefa);
    }

}