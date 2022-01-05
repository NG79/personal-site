import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills } from '../data/resume/skills';

const sections = [
  'Experience',
  'Skills',
  'Education',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Nandini Govindarajan's Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Professional Summary</Link></h2>
          <ul className="resume-summary">
            <li><b>20</b> years of B2B <b>business transformation</b> experience</li>
            <li>Thrive in <b>leadership roles</b> that blend business acumen and
              technical depth
            </li>
            <li><b>Fast learner</b> with proven abiliity to learn, experiment and adapt
            </li>
            <li>Deeply interested in building <b>Web3</b> projects</li>
          </ul>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <div className="resume-body">
        <Experience data={positions} />
        <Skills data={skills} />
        <Education data={degrees} />
        <Courses data={courses} />
        <References />
      </div>
    </article>
  </Main>
);

export default Resume;
