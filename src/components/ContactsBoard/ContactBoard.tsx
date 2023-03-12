import React from "react"
import s from "./ContactBoard.module.css"

//
export const ContactBoard = () => {
    return (
        <div className={s.contactsWrapper}>
            <a href="https://kamensky124.github.io/AkCV/">CV</a>
            <a href="https://www.linkedin.com/in/andrey-kamensky-987883b2/">LinkedIn</a>
            <a href="https://t.me/kamensky24">Telegram</a>
            <span>89232870027</span>
        </div>
    )
}
