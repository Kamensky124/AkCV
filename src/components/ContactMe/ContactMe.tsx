import React from "react"
import s from "./ContactMe.module.css"

//
export const ContactMe = () => {
    return (
        <div className={s.contactMeFormWrapper}>
            <div className={s.a}></div>
            <h3 className={s.contactsTitle}>Contact me</h3>
            <form>
                <ul className={s.formWrapper}>
                <li className={s.formRow}>
                    <label>Your Name</label>
                    <input type="text" id="name"></input>
                </li>

                <li className={s.formRow}>
                    <label>E-mail</label>
                    <input type="email" id="email"></input>
                </li>
                <li className={s.formRow}>
                    <p>Message</p>
                    <textarea id="msg">

                    </textarea>
                </li>
                <li className={s.formSubmitBtn}>
                <button type="submit">Submit</button>
                </li>
                </ul>
            </form>
        </div>
    )
}
