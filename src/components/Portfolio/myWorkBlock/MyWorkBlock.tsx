import React from "react"
import s from "./MyWorkBlock.module.css"

export type MyWorkBlockTypeProps = {
    id: string,
    myWorkTitle: string,
    myWorkDescription: string,
    imgSrc: string
}

export const MyWorkBlock = (props: MyWorkBlockTypeProps) => {
    return (
        <div className={s.myWorksBox}>
            <img src={props.imgSrc} className={s.imgWork}></img>
            <span className={s.myWorkTitle}>{props.myWorkTitle}</span>
            <p>{props.myWorkDescription}</p>
        </div>
    )
}
