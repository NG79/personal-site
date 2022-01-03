import React from 'react';
import { BrowserRouter, Route, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

function Blog() {
  return (
    <BrowserRouter>
      <div>
        <h2>In Blog.js component</h2>
      </div>
    </BrowserRouter>
  );
}

export default Blog;
