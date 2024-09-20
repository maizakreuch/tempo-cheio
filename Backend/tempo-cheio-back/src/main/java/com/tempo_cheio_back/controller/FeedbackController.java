package com.tempo_cheio_back.controller;

import com.tempo_cheio_back.model.Feedback;
import com.tempo_cheio_back.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    FeedbackService feedbackService;

    @GetMapping
    public ResponseEntity<List<Feedback>> findAll() {
        return ResponseEntity.ok(feedbackService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(feedbackService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Feedback> create(@RequestBody Feedback feedback) {
        return ResponseEntity.ok(feedbackService.save(feedback));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Feedback> update(@RequestBody Feedback feedback) {
        return ResponseEntity.ok(feedbackService.save(feedback));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Feedback> delete(@PathVariable Integer id) {
        Feedback feedback = feedbackService.findById(id);
        feedbackService.delete(feedback);
        return ResponseEntity.ok(feedback);
    }

}