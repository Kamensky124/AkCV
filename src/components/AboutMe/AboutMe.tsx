import React from "react"
import s from "./AboutMe.module.css"
import {ContactBoard} from "../ContactsBoard/ContactBoard";
import toDoListWorkImg from "../../assets/img/imgWorks/toDoList.png";
import myFaceImg from "../../assets/img/FaceFormal.jpg";
//
export const AboutMe = ()  =>{
    return (
    <div className={s.aboutMe}>
        <img src={myFaceImg} className={s.img}></img>
        Hello! I'm Andrey Kamensky, frontend developer.
        I'm glad to see you in my GitHub. Have a nice day!
        <ContactBoard/>
    </div>
)}
