package com.tempo_cheio_back.controller;

import com.tempo_cheio_back.model.Tarefa;
import com.tempo_cheio_back.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/tarefa")
public class TarefaController {

    @Autowired
    TarefaService tarefaService;

    @GetMapping
    public ResponseEntity<List<Tarefa>> findAll() {
        return ResponseEntity.ok(tarefaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarefa> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(tarefaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Tarefa> create(@RequestBody Tarefa tarefa) {
        return ResponseEntity.ok(tarefaService.save(tarefa));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarefa> update(@RequestBody Tarefa tarefa) {
        return ResponseEntity.ok(tarefaService.save(tarefa));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Tarefa> delete(@PathVariable Integer id) {
        Tarefa tarefa = tarefaService.findById(id);
        tarefaService.delete(tarefa);
        return ResponseEntity.ok(tarefa);
    }

}