import React from 'react';
import PostItem from './PostItem';

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((item, index) => (
        <PostItem remove={remove} number={index} post={item} key={item.id} />
      ))}
    </div>
  );
}
