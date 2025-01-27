package com.xpto.projectmanagment.service.mapper;

import com.xpto.projectmanagment.domain.Project;
import com.xpto.projectmanagment.domain.Task;
import com.xpto.projectmanagment.service.dto.ProjectDTO;
import com.xpto.projectmanagment.service.dto.TaskDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Task} and its DTO {@link TaskDTO}.
 */
@Mapper(componentModel = "spring")
public interface TaskMapper extends EntityMapper<TaskDTO, Task> {
    @Mapping(target = "project", source = "project", qualifiedByName = "projectName")
    TaskDTO toDto(Task s);

    @Named("projectName")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    ProjectDTO toDtoProjectName(Project project);
}
