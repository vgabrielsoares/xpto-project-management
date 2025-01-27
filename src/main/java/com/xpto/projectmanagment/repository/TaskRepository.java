package com.xpto.projectmanagment.repository;

import com.xpto.projectmanagment.domain.Task;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Task entity.
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    default Optional<Task> findOneWithEagerRelationships(Long id) {
        return this.findOneWithToOneRelationships(id);
    }

    default List<Task> findAllWithEagerRelationships() {
        return this.findAllWithToOneRelationships();
    }

    default Page<Task> findAllWithEagerRelationships(Pageable pageable) {
        return this.findAllWithToOneRelationships(pageable);
    }

    @Query(
        value = "SELECT * FROM task LEFT JOIN project ON task.project_id = project.id",
        countQuery = "SELECT COUNT(*) FROM task",
        nativeQuery = true
    )
    Page<Task> findAllWithToOneRelationships(Pageable pageable);

    @Query(value = "SELECT * FROM task LEFT JOIN project ON task.project_id = project.id", nativeQuery = true)
    List<Task> findAllWithToOneRelationships();

    @Query(value = "SELECT * FROM task LEFT JOIN project ON task.project_id = project.id WHERE task.id = :id", nativeQuery = true)
    Optional<Task> findOneWithToOneRelationships(@Param("id") Long id);
}
