import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import sanityClient from '../../client';

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  const query = '*[_type == "post"] | order(publishedAt desc) { title, publishedAt, slug, mainImage{asset->{_id,url}}}';

  useEffect(() => {
    sanityClient.fetch(query)
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blog-container">
      {allPostsData
      && allPostsData.map((post) => (
        <Link to={`/${post.slug.current}`} key={post.slug.current}>
          <span key={post.slug.current} className="blog-tile">
            <p className="blog-post-date">{dayjs(post.publishedAt).format('MMMM YYYY')}</p>
            <span className="blog-header">
              <h6 className="blog-post-title">{post.title}</h6>
            </span>
            <img src={post.mainImage.asset.url} alt="main" className="tile-image" />
          </span>
        </Link>
      ))}
    </div>
  );
}
