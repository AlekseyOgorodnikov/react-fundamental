import React from 'react';
import MyButton from './UI/button/MyButton';

export default function PostItem(props) {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>
            {props.number}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>

          <div className="post__btn">
            <MyButton onClick={() => props.remove(props.post)}>
              Удалить
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
