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
                    <p> Hello! I'm Andrey Kamensky, frontend developer.</p>
                    <p>I'm glad to see you in my GitHub. Have a nice day!</p>
                </div>
            </div>
            <ContactBoard/>
        </div>

    )
}
