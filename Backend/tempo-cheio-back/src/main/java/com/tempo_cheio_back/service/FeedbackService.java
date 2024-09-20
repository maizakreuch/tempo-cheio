package com.tempo_cheio_back.service;

import com.tempo_cheio_back.model.Feedback;
import com.tempo_cheio_back.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class FeedbackService {

    @Autowired
    FeedbackRepository feedbackRepository;

    public List<Feedback> findAll() {
        return feedbackRepository.findAll();
    }

    public Feedback findById(Integer id) {
        return feedbackRepository.findById(id).orElse(null);
    }

    public Feedback save(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public void delete(Feedback feedback) {
        feedbackRepository.delete(feedback);
    }
}