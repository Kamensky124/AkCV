import React from "react"
import s from "./Footer.module.css"
import {ContactBoard} from "../ContactsBoard/ContactBoard";

//
export const Footer = () => {
    return (
        <div>
            <div className={s.footer}>
            <p>Andrey Kamensky</p>
            <ContactBoard/>
            </div>
        </div>
    )
}
