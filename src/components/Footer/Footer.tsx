import React from "react"
import s from "./Footer.module.css"
import {ContactBoard} from "../ContactsBoard/ContactBoard";

//
export const Footer = () => {
    return (
        <div className={s.footer}>
            <ContactBoard/>
        </div>
    )
}
