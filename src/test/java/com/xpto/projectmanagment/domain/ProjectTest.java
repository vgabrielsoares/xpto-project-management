package com.xpto.projectmanagment.domain;

import static com.xpto.projectmanagment.domain.ProjectTestSamples.*;
import static com.xpto.projectmanagment.domain.TaskTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.xpto.projectmanagment.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class ProjectTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Project.class);
        Project project1 = getProjectSample1();
        Project project2 = new Project();
        assertThat(project1).isNotEqualTo(project2);

        project2.setId(project1.getId());
        assertThat(project1).isEqualTo(project2);

        project2 = getProjectSample2();
        assertThat(project1).isNotEqualTo(project2);
    }

    @Test
    void tasksTest() {
        Project project = getProjectRandomSampleGenerator();
        Task taskBack = getTaskRandomSampleGenerator();

        project.addTasks(taskBack);
        assertThat(project.getTasks()).containsOnly(taskBack);
        assertThat(taskBack.getProject()).isEqualTo(project);

        project.removeTasks(taskBack);
        assertThat(project.getTasks()).doesNotContain(taskBack);
        assertThat(taskBack.getProject()).isNull();

        project.tasks(new HashSet<>(Set.of(taskBack)));
        assertThat(project.getTasks()).containsOnly(taskBack);
        assertThat(taskBack.getProject()).isEqualTo(project);

        project.setTasks(new HashSet<>());
        assertThat(project.getTasks()).doesNotContain(taskBack);
        assertThat(taskBack.getProject()).isNull();
    }
}
