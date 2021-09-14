import React from 'react';
import MyButton from '../button/MyButton';
import classes from './MyModal.module.css';

export default function MyModal({ children, visible, setVisible }) {
  const rootClasses = [classes.myModal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <MyButton onClick={() => setVisible(false)}>Закрыть форму</MyButton>
        {children}
      </div>
    </div>
  );
}
