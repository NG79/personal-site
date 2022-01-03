import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Professional from '../components/Projects/Professional';
import Personal from '../components/Projects/Personal';
import professional from '../data/professional';
import personal from '../data/personal';

const projsections = [
  'Professional',
  'Personal',
];

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Nandini Govindarajan's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="projects"><u>Projects</u></Link></h2>
          <navbar className="typeofproject">
            {projsections.map((sec) => (
              <h3 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h3>))}
          </navbar>
        </div>
      </header>
      <div className="projectbody">
        <Professional data={professional} />
        <Personal data={personal} />
      </div>
    </article>
  </Main>
);

export default Projects;
