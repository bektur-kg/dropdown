import React, {useState} from 'react'
import cls from './Navbar.module.scss'
import {BsGithub} from "react-icons/bs";
import {AiOutlineBars} from "react-icons/ai"
import Dropdown from "./Dropdown"


const Navbar = () => {
  const [isShow, setIsShow] = useState(false)


  return (
    <div className={cls.navbar}>
      <div className={cls.container}>
        <div className={cls.logo}>
          <BsGithub/>
        </div>
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
        <div className={cls.burger}>
          <AiOutlineBars
            onClick={() => setIsShow(true)}
          />
        </div>
        <div className={`${cls.dropdown} ${isShow ? cls.active : ''}`}>
          <Dropdown changeState={setIsShow}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
