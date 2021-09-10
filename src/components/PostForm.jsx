import React, { useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({ title: '', body: '' });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />

      <MyInput
        type="text"
        placeholder="Описание поста"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />

      {/* Неуправляемый / Неконтролируемый компонент
    <MyInput type="text" placeholder="Описание поста" ref={bodyInputRef} />
    <input type="text" ref={bodyInputRef} /> */}

      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}
