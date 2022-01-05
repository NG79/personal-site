import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Nandini Govindarajan's website"}
  >
    <article className="post" id="index">
      <header className="header">
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to Nandini&apos;s online home</Link></h2>
        </div>
        <div className="invitation"> Please feel free to read more <Link to="/about" className="about-links">about me, </Link>
          check out my {' '}
          <Link to="/resume" className="about-links">resume </Link>, {' '}
          <Link to="/projects" className="about-links"> browse through some sample projects </Link>, {' '}
          read <Link to="/blog" className="about-links">some of my writing </Link>, {' '}
          or <Link to="/contact" className="about-links"> contact</Link> me.
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
