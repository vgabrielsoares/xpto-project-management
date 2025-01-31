package com.xpto.projectmanagment.service.mapper;

import com.xpto.projectmanagment.domain.Project;
import com.xpto.projectmanagment.service.dto.ProjectDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Project} and its DTO {@link ProjectDTO}.
 */
@Mapper(componentModel = "spring", uses = { TaskMapper.class })
public interface ProjectMapper extends EntityMapper<ProjectDTO, Project> {
    @Mapping(target = "tasks", source = "tasks")
    ProjectDTO toDto(Project project);

    @Mapping(target = "tasks", source = "tasks")
    Project toEntity(ProjectDTO projectDTO);

    @Named("partialUpdate")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void partialUpdate(@MappingTarget Project entity, ProjectDTO dto);
}
