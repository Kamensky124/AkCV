import React from "react"
import s from "./Portfolio.module.css"
import faceBookWorkImg from "../../assets/img/imgWorks/Facebook.webp";
import sneakersShopWorkImg from "../../assets/img/imgWorks/sneakersShop.jpg";
import toDoListWorkImg from "../../assets/img/imgWorks/toDoList.png";
import {v1} from "uuid";
import {MyWorkBlock, MyWorkBlockTypeProps} from "./myWorkBlock/MyWorkBlock";
import {JobBlock} from "../Resume/ResumeBlocks/JobsBlock";

//
export const Portfolio = ()  =>{
    const WorksArray: Array<MyWorkBlockTypeProps> = [
        {
            id: v1(),
            myWorkTitle: 'ToDo List',
            myWorkDescription: 'Some words about project',
            imgSrc: toDoListWorkImg
        },
        {
            id: v1(),
            myWorkTitle: 'Social network',
            myWorkDescription: 'Some words about project',
            imgSrc: faceBookWorkImg
        },
        {
            id: v1(),
            myWorkTitle: 'Sneakers EShop',
            myWorkDescription: 'Some words about project',
            imgSrc: sneakersShopWorkImg
        }
]
    return (
    <div className={s.portfolio}>
        <h3>My works:</h3>
        {WorksArray.map(wrk =>
            <MyWorkBlock
                key={wrk.id}
                id={wrk.id}
                myWorkTitle={wrk.myWorkTitle}
                myWorkDescription={wrk.myWorkDescription}
                imgSrc={wrk.imgSrc}
            />)}
    </div>
)}
