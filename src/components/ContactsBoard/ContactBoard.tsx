import React from "react"
import s from "./ContactBoard.module.css"
import CV from "../../assets/docs/CV Front-end Andrey Kamensky.pdf"
//
export const ContactBoard = () => {
    return (
        <div className={s.contactsWrapper}>

            <a href="https://kamensky124.github.io/AkCV/">            <img src="https://img.icons8.com/color/1x/github--v1.png" className={s.logoContact}></img></a>

            <a href={CV}> <img src="https://img.icons8.com/color/1x/resume.png" className={s.logoContact}></img></a>

            <a href="89232870027"><img src="https://img.icons8.com/color/1x/apple-phone.png" className={s.logoContact}></img></a>

            <a href="https://t.me/kamensky24"><img src="https://img.icons8.com/color/1x/telegram-app" className={s.logoContact}></img></a>

            <a href="https://www.linkedin.com/in/andrey-kamensky-987883b2/"><img
                src="https://img.icons8.com/color/1x/linkedin-circled.png" className={s.logoContact}></img></a>

        </div>
    )
}
