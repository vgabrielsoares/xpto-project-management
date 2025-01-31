import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './home.scss';

export const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">XPTO Project Management</h2>
      <div className="button-group">
        <div className="button-column">
          <Button tag={Link} to="/project" color="primary" className="custom-button">
            Projects
          </Button>
          <Button tag={Link} to="/project/new" color="primary" className="custom-button">
            Create Project
          </Button>
        </div>
        <div className="button-column">
          <Button tag={Link} to="/task" color="primary" className="custom-button">
            Tasks
          </Button>
          <Button tag={Link} to="/task/new" color="primary" className="custom-button">
            Create Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
