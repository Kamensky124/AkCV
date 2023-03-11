import React from "react"
import s from "./NavBar.module.css"

//
export const NavBar = ()  =>{
    return (
    <div className={s.navBar}>
        <a href="">About me</a>
        <a href="">Skills</a>
        <a href="">Portfolio</a>
        <a href="">Resume</a>
        <a href="">Contacts</a>
    </div>
)}
