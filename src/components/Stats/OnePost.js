import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../../client';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const query = '*[slug.current == $slug]{ title, slug, mainImage{asset->{_id,url}}, body, "name": author->name, "authorImage": author->image}';
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(query, { slug })
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <p data-testid="heading" className="blog-post-backto"><Link to="/stats">Back to all Posts</Link></p>
      <div className="post-heading">
        <h3 className="post-title">{postData.title}</h3>
        <img className="post-image" src={urlFor(postData.mainImage).width(200).url()} alt="main one" />
        <p className="post-date">{postData.publishedAt}</p>
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
