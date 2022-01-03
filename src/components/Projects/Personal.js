import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const Personal = ({ data }) => (
  <div className="cell-container">
    <div className="link-to" id="personal" />
    <div className="title">
      <h3>Personal</h3>
      <p>A sample of personal projects</p>
    </div>
    {data.map((project) => (
      <Project
        data={project}
        key={project.title}
      />
    ))}
  </div>
);

Personal.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })),
};

Personal.defaultProps = {
  data: [],
};

export default Personal;
