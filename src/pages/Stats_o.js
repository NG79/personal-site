import React from 'react';

import
{
  Switch, Route, Link, BrowserRouter,
} from 'react-router-dom';

import Main from '../layouts/Main';
import Firstpost from './Firstpost';

const Blog = () => (
  <Main
    title="Blog"
    description="Learn about Nandini Govindarajan's Blog."
  >
    <div className="blog-main">
      <h2>BLOG</h2>
      <article className="blog-sections">
        <div className="blog-index">
          <h3 data-testid="heading">Index</h3>
          <BrowserRouter>
            <div>
              <ul>
                <li>
                  <Link to="/firstpost">First Post</Link>
                </li>
                <li>
                  <Link to="/secondpost">Second Post</Link>
                </li>
              </ul>
            </div>
            <Switch>
              <Route exact path="/firstpost">
                <Firstpost />
              </Route>
              <Route path="/secondpath">
                <Firstpost />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
        <div className="blog-content">
          <p>First Post Contents</p>
          <p>Second Post Contents</p>
        </div>
      </article>
    </div>
  </Main>
);

export default Blog;
