import React from "react"
import s from "./AboutMe.module.css"
import {ContactBoard} from "../ContactsBoard/ContactBoard";
import toDoListWorkImg from "../../assets/img/imgWorks/toDoList.png";
import myFaceImg from "../../assets/img/FaceFormal.jpg";
//
export const AboutMe = () => {
    return (
        <div className={s.myImgTextAboutMeContacts}>
            <div className={s.myImgTextAboutMe}>
                <img src={myFaceImg} className={s.img}></img>
                <div className={s.TextAboutMe}>
                    <p> Hello!</p>
                    <h2>I'm Andrey Kamensky, frontend developer.</h2>
                    <p>I'm glad to see you here. Have a nice day!</p>
                </div>
            </div>
        </div>

    )
}
