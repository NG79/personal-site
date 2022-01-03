import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const Professional = ({ data }) => (
  <div className="cell-container">
    <div className="link-to" id="professional" />
    <div className="title">
      <h3>Professional</h3>
      <p>A sample of projects from my work experiences</p>
    </div>
    {data.map((project) => (
      <Project
        data={project}
        key={project.title}
      />
    ))}
  </div>
);

Professional.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })),
};

Professional.defaultProps = {
  data: [],
};

export default Professional;
