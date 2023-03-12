import React from "react"
import s from "./Footer.module.css"
import {ContactBoard} from "../ContactsBoard/ContactBoard";

//
export const Footer = () => {
    return (
        <div>
            <div className={s.footer}>
            <h3>Andrey Kamensky</h3>
            <ContactBoard/>
            </div>
        </div>
    )
}
