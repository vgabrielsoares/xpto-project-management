package com.xpto.projectmanagment.service.mapper;

import com.xpto.projectmanagment.domain.Project;
import com.xpto.projectmanagment.service.dto.ProjectDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Project} and its DTO {@link ProjectDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProjectMapper extends EntityMapper<ProjectDTO, Project> {}
