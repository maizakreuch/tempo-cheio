package com.tempo_cheio_back.repository;

import com.tempo_cheio_back.model.Historico;
import com.tempo_cheio_back.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HistoricoRepository extends JpaRepository<Historico, Integer> {
    // Você pode adicionar métodos personalizados aqui, se necessário

    @Query(value = "select * from tarefa where data <= now() order by data desc", nativeQuery = true)
    List<Tarefa> obterMedicamentosHistorico();
}
