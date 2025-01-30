package com.xpto.projectmanagment.repository;

import com.xpto.projectmanagment.domain.Project;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Project entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    @Query(value = "SELECT * FROM project", nativeQuery = true)
    List<Project> findAll();

    @Query(value = "SELECT * FROM project WHERE id = ?1", nativeQuery = true)
    Optional<Project> findOne(Long id);
}
