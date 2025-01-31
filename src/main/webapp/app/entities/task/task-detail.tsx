import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity } from './task.reducer';

export const TaskDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const taskEntity = useAppSelector(state => state.task.entity);
  return (
    <Container className="task-detail">
      <Row className="detail-row">
        <Col md="8">
          <h2 data-cy="taskDetailsHeading" className="detail-title">
            Task Detail
          </h2>
          <dl className="jh-entity-details">
            <Row className="detail-item">
              <Col md="4">
                <dt>ID</dt>
              </Col>
              <Col md="8">
                <dd>{taskEntity.id}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="4">
                <dt>Title</dt>
              </Col>
              <Col md="8">
                <dd>{taskEntity.title}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="4">
                <dt>Description</dt>
              </Col>
              <Col md="8">
                <dd>{taskEntity.description}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="4">
                <dt>Deadline</dt>
              </Col>
              <Col md="8">
                <dd>{taskEntity.deadline}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="4">
                <dt>Status</dt>
              </Col>
              <Col md="8">
                <dd>{taskEntity.status}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="4">
                <dt>Responsible</dt>
              </Col>
              <Col md="8">
                <dd>{taskEntity.responsible}</dd>
              </Col>
            </Row>
            <Row className="detail-item">
              <Col md="4">
                <dt>Project</dt>
              </Col>
              <Col md="8">
                <dd>{taskEntity.project ? taskEntity.project.name : ''}</dd>
              </Col>
            </Row>
          </dl>
          <div className="button-group">
            <Button tag={Link} to="/task" replace color="info" data-cy="entityDetailsBackButton">
              <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
            </Button>
            <Button tag={Link} to={`/task/${taskEntity.id}/edit`} replace color="primary">
              <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskDetail;
