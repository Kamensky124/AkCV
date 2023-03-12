import React from "react"
import s from "./Portfolio.module.css"
import faceBookWorkImg from "../../assets/img/imgWorks/Facebook.webp";
import sneakersShopWorkImg from "../../assets/img/imgWorks/sneakersShop.jpg";
import toDoListWorkImg from "../../assets/img/imgWorks/toDoList.png";
import {v1} from "uuid";
import {MyWorkBlock, MyWorkBlockTypeProps} from "./myWorkBlock/MyWorkBlock";
import {JobBlock} from "../Resume/ResumeBlocks/JobsBlock";

//
export const Portfolio = () => {

    const faceBookWorkStyle = {
        backgroundImage: `url(${faceBookWorkImg})`,
    };
    const sneakersShopWorkStyle = {
        backgroundImage: `url(${sneakersShopWorkImg})`,
    };
    const toDoListWorkStyle = {
        backgroundImage: `url(${toDoListWorkImg})`,
    };

    const blankWorkDesc: string = "This project makes all people on the planet happy. Using it, they think only about love and prosperity, they want to create and create life"

    const WorksArray: Array<MyWorkBlockTypeProps> = [
        {
            id: v1(),
            myWorkTitle: 'ToDo List',
            myWorkDescription: blankWorkDesc,
            imgSrc: {
                backgroundImage: `url(${toDoListWorkImg})`,
            }
        },
        {
            id: v1(),
            myWorkTitle: 'Social network',
            myWorkDescription: blankWorkDesc,
            imgSrc: {
                backgroundImage: `url(${faceBookWorkImg})`,
            }
        },
        {
            id: v1(),
            myWorkTitle: 'Sneakers EShop',
            myWorkDescription: blankWorkDesc,
            imgSrc: {
                backgroundImage: `url(${sneakersShopWorkImg})`,
            }
        }
    ]
    return (
        <div className={s.portfolioWrapper}>
            <h3>My works:</h3>
            <div className={s.worksWrapper}>
                {WorksArray.map(wrk =>
                    <MyWorkBlock
                        key={wrk.id}
                        id={wrk.id}
                        myWorkTitle={wrk.myWorkTitle}
                        myWorkDescription={wrk.myWorkDescription}
                        imgSrc={wrk.imgSrc}
                    />)}
            </div>
        </div>
    )
}
