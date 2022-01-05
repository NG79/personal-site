import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import dayjs from 'dayjs';
import sanityClient from '../../client';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const query = '*[slug.current == $slug]{ title, publishedAt, slug, mainImage{asset->{_id,url}}, body, "name": author->name, "authorImage": author->image}';
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(query, { slug })
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <p data-testid="heading" className="blog-post-backto"><Link to="/blog">Back to all Posts</Link></p>
      <div className="post-heading">
        <p className="post-date">{dayjs(postData.publishedAt).format('MMMM DD, YYYY')}</p>
        <h3 className="post-title">{postData.title}</h3>
        <img className="post-image" src={urlFor(postData.mainImage).width(200).url()} alt="main one" />
      </div>
      <div className="post-body">
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
}
