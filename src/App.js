import React, { useState } from 'react';
import PostForm from './components/PostForm';
// import Counter from './components/Counter.jsx';
import PostList from './components/PostList.jsx';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Best programmer' },
    { id: 2, title: 'Python', body: 'Antihrist' },
    { id: 3, title: 'C++', body: 'Best of the best' },
    { id: 5, title: 'C', body: 'Old school programmer' },
    { id: 4, title: 'PHP', body: 'No comments' },
  ]);

  const [selected, setSelected] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelected(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      {/* <Counter /> */}
      <hr style={{ margin: '20px' }} />
      <div>
        <MySelect
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
          value={selected}
          onChange={sortPosts}
        />
      </div>

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов" />
      ) : (
        <h1 style={{ textAlign: 'center', margin: '20px ' }}>
          В списке нет постов, либо они не найдены!
        </h1>
      )}
    </div>
  );
}

export default App;
