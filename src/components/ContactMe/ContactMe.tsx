import React from "react"
import s from "./ContactMe.module.css"

//
export const ContactMe = () => {
    return (
        <div className={s.contactMeFormWrapper}>
            <div className={s.a}></div>
            <h3>Contact me</h3>
            <form>
                <div>
                    <span>Your Name</span>
                    <input type="text"></input>
                </div>

                <div>
                    <span>E-mail</span>
                    <input type="text"></input>
                </div>

                <div>
                    <p>Message</p>
                    <textarea>

                    </textarea>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
