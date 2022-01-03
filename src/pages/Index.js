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
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>A window into my life</p>
        </div>
        <div className="invitation"> Please feel free to read more <Link to="/about" className="about-links">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume" className="about-links">resume</Link>, {' '}
          <Link to="/projects" className="about-links"> projects</Link>, {' '}
          view <Link to="/stats" className="about-links">Blog</Link>, {' '}
          or <Link to="/contact" className="about-links">contact</Link> me.
        </div>
        <p className="codelink"> Site source code <a href="https://github.com/NG79/personal-site">here</a>.</p>
      </header>
    </article>
  </Main>
);

export default Index;
