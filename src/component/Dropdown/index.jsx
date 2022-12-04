import React from 'react'
import cls from './Dropdwon.module.scss'

const MyComponent = ({changeState}) => {

  return (
    <div className={cls.dropdown}>
      <div className={cls.close} onClick={() => changeState(false)}>&times;</div>
      <nav className={cls.navigation}>
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>sevices</li>
          <li>contacts</li>
          <li>Activities</li>
        </ul>
      </nav>
      <div className={cls.lang}>
        <li>Ru</li>
        <li>En</li>
      </div>
    </div>
  );
};

export default MyComponent;
