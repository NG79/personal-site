import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => (
  <article className="mini-post">
    <div className="mini-post-hdr">
      <header className="miniheader">
        <h3><a href={data.link}>{data.title}</a></h3>
      </header>
      <div className="image">
        <a href={data.link}>
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
        </a>
      </div>
    </div>
    <div className="description">
      <p>{data.desc}</p>
    </div>
  </article>
);

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
