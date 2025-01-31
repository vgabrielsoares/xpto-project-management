import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ProjectStatus } from 'app/shared/model/enumerations/project-status.model';
import { ProjectTeam } from 'app/shared/model/enumerations/project-team.model';
import { createEntity, getEntity, reset, updateEntity } from './project.reducer';

export const ProjectUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const projectEntity = useAppSelector(state => state.project.entity);
  const loading = useAppSelector(state => state.project.loading);
  const updating = useAppSelector(state => state.project.updating);
  const updateSuccess = useAppSelector(state => state.project.updateSuccess);
  const projectStatusValues = Object.keys(ProjectStatus);
  const projectTeamValues = Object.keys(ProjectTeam);

  const handleClose = () => {
    navigate('/project');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }

    const entity = {
      ...projectEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          status: 'PLANNED',
          ...projectEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="xptoApp.project.home.createOrEditLabel" data-cy="ProjectCreateUpdateHeading">
            {isNew ? 'Create a Project' : 'Edit a Project'}
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="project-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="project-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Description" id="project-description" name="description" data-cy="description" type="textarea" />
              <ValidatedField
                label="Start Date"
                id="project-startDate"
                name="startDate"
                data-cy="startDate"
                type="date"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="End Date" id="project-endDate" name="endDate" data-cy="endDate" type="date" />
              <ValidatedField label="Status" id="project-status" name="status" data-cy="status" type="select">
                <option value="" key="0">
                  Select a Status...
                </option>
                {projectStatusValues.map(projectStatus => (
                  <option value={projectStatus} key={projectStatus}>
                    {projectStatus}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField label="Team" id="project-team" name="team" data-cy="team" type="select">
                <option value="" key="0">
                  Select a Team...
                </option>
                {projectTeamValues.map(projectTeam => (
                  <option value={projectTeam} key={projectTeam}>
                    {projectTeam}
                  </option>
                ))}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/project" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProjectUpdate;
