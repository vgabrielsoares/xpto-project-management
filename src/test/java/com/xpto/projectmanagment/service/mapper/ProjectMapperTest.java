package com.xpto.projectmanagment.service.mapper;

import static com.xpto.projectmanagment.domain.ProjectAsserts.*;
import static com.xpto.projectmanagment.domain.ProjectTestSamples.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ProjectMapperTest {

    private ProjectMapper projectMapper;

    @BeforeEach
    void setUp() {
        projectMapper = new ProjectMapperImpl();
    }

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getProjectSample1();
        var actual = projectMapper.toEntity(projectMapper.toDto(expected));
        assertProjectAllPropertiesEquals(expected, actual);
    }
}
