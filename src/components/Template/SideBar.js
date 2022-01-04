import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nandini Govindarajan</h2>
        <p><a href="mailto:nandini.govindarajan@gmail.com">nandini.govindarajan@gmail.com</a></p>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb">
      <h3>Digital Transformation Professional. Technology Enthusiast. Builder. Mom. </h3>
      <h3>Non-fiction reader. Music lover. Blogger.
        Rabbit hole seeker. Gardener. Hobby-Painter. Nature lover.
      </h3>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Nandini Govindarajan <Link to="/">nandinigovindarajan.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
