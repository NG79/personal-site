import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Main from '../layouts/Main';
import AllPosts from '../components/Stats/AllPosts';
import OnePost from '../components/Stats/OnePost';

const Blog = () => (
  <Main
    title="Blog"
    description="Learn about Nandini Govindarajan's Blog."
  >
    <div className="blog-main">
      <div>
        <BrowserRouter>
          <div className="blog-content">
            <Route component={AllPosts} path="/stats/" exact />
            <Route component={OnePost} path="/:slug" />
          </div>
        </BrowserRouter>
      </div>
    </div>
  </Main>
);

export default Blog;
