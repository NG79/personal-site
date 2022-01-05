import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
      </Helmet>
      <h1 data-testid="heading">Page Not Found</h1>
      <p>If you were looking for a blog post, linking you to the <b><Link to="/blog">Blog home</Link></b>.</p>
      <p>Or, you can return <b><Link to="/">home</Link>.</b></p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
