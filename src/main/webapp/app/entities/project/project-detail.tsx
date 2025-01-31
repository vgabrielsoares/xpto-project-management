import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row, Container } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './project.reducer';

export const ProjectDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const projectEntity = useAppSelector(state => state.project.entity);
  return (
    <Container className="project-detail">
      <Row className="detail-row">
        <Col md="8">
          <h2 data-cy="projectDetailsHeading" className="detail-title">
            Project Detail
          </h2>
          <dl className="jh-entity-details">
            <Row className="detail-item">
              <Col md="6">
                <dt>ID</dt>
              </Col>
              <Col md="6">
                <dd>{projectEntity.id}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="6">
                <dt>Name</dt>
              </Col>
              <Col md="6">
                <dd>{projectEntity.name}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="6">
                <dt>Description</dt>
              </Col>
              <Col md="6">
                <dd>{projectEntity.description}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="6">
                <dt>Start Date</dt>
              </Col>
              <Col md="6">
                <dd>
                  {projectEntity.startDate ? (
                    <TextFormat value={projectEntity.startDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
                  ) : null}
                </dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="6">
                <dt>End Date</dt>
              </Col>
              <Col md="6">
                <dd>
                  {projectEntity.endDate ? <TextFormat value={projectEntity.endDate} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}
                </dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="6">
                <dt>Status</dt>
              </Col>
              <Col md="6">
                <dd>{projectEntity.status}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="6">
                <dt>Team</dt>
              </Col>
              <Col md="6">
                <dd>{projectEntity.team}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="6">
                <dt>Tasks</dt>
              </Col>
              <Col md="6">
                <dd>
                  <ul>{projectEntity?.tasks?.map(task => <li key={task.id}>{task.title}</li>)}</ul>
                </dd>
              </Col>
            </Row>
          </dl>
          <div className="button-group">
            <Button tag={Link} to="/project" replace color="info" data-cy="entityDetailsBackButton">
              <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
            </Button>
            <Button tag={Link} to={`/project/${projectEntity.id}/edit`} replace color="primary">
              <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
