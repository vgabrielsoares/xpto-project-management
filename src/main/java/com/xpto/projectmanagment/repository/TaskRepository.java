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

    @Query("SELECT t FROM Task t LEFT JOIN FETCH t.project")
    Page<Task> findAllWithToOneRelationships(Pageable pageable);

    @Query("SELECT t FROM Task t LEFT JOIN FETCH t.project")
    List<Task> findAllWithToOneRelationships();

    @Query("SELECT t FROM Task t LEFT JOIN FETCH t.project WHERE t.id = :id")
    Optional<Task> findOneWithToOneRelationships(@Param("id") Long id);

    @Query("SELECT t FROM Task t LEFT JOIN FETCH t.project")
    List<Task> findAll();
}
