import React from "react"
import s from "./Portfolio.module.css"
import faceBookWorkImg from "../../assets/img/imgWorks/Facebook.webp";
import sneakersShopWorkImg from "../../assets/img/imgWorks/sneakersShop.png";
import toDoListWorkImg from "../../assets/img/imgWorks/toDoList.png";

//
export const Portfolio = ()  =>{
    return (
    <div className={s.portfolio}>
        My works:
        <div><img src={faceBookWorkImg} className={s.img}></img></div>
        <div><img src={sneakersShopWorkImg} className={s.img}></img></div>
        <div><img src={toDoListWorkImg} className={s.img}></img></div>
    </div>
)}
