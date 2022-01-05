import React from 'react';

import {
  Route, BrowserRouter, Link, Switch,
} from 'react-router-dom';

import Main from '../layouts/Main';
import AllPosts from '../components/Stats/AllPosts';
import OnePost from '../components/Stats/OnePost';

const Blog = () => (
  <Main
    title="Blog"
    description="Learn about Nandini Govindarajan's Blog."
  >
    <article className="post" id="resume">
      <header>
        <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
        <p><i>(In Beta)</i> </p>
      </header>
      <div className="blog-main">
        <div>
          <BrowserRouter>
            <div className="blog-content">
              <Switch>
                <Route component={AllPosts} path="/blog/" exact />
                <Route component={OnePost} path="/:slug" />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </article>
  </Main>
);

export default Blog;
