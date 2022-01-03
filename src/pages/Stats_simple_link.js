import React from 'react';

import Main from '../layouts/Main';

const Blog = () => (
  <Main
    title="Blog"
    description="Learn about Nandini Govindarajan's Blog."
  >
    <div className="blog-main">
      <h2>BLOG</h2>
      <article className="blog-sections">
        <div className="blog-index">
          <h3 data-testid="heading">Posts</h3>
          <ul>
            <li><a href="#firstpost">Kafka on the Shore</a></li>
            <li><a href="#secondpost">Second Post</a></li>
          </ul>
        </div>
        <div className="blog-content">
          <section className="blogpost">
            <div id="firstpost">
              <firstpost />
            </div>
            <div id="secondpost">
              <h2>2nd post</h2>
              <p> July 2015 </p>
              <p>this is the second post etc etc </p>
              <p>   </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  </Main>
);

export default Blog;
