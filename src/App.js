import React, { useState, useMemo } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
// import Counter from './components/Counter.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Best programmer' },
    { id: 2, title: 'Python', body: 'Antihrist' },
    { id: 3, title: 'C++', body: 'Best of the best' },
    { id: 5, title: 'C', body: 'Old school programmer' },
    { id: 4, title: 'PHP', body: 'No comments' },
  ]);

  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('Отработала функциясортировки');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPsots = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: '20px' }}
        onClick={() => {
          setModal(true);
        }}
      >
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      {/* <Counter /> */}
      <hr style={{ margin: '20px' }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>

      <PostList
        remove={removePost}
        posts={sortedAndSearchPsots}
        title="Список постов"
      />
    </div>
  );
}

export default App;
