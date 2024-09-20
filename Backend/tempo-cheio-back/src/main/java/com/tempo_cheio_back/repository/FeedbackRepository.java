package com.tempo_cheio_back.repository;


import com.tempo_cheio_back.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

}

