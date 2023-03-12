import React from "react"
import s from "./MyWorkBlock.module.css"

export type MyWorkBlockTypeProps = {
    id: string,
    myWorkTitle: string,
    myWorkDescription: string,
    imgSrc: object
}

export const MyWorkBlock = (props: MyWorkBlockTypeProps) => {
    return (
        <div className={s.myWorksBox}>
            <a href="" style={props.imgSrc} className={s.goToWorkButton}>Посмотреть</a>
            <div>
                <b className={s.myWorkTitle}>{props.myWorkTitle}</b>
            <p className={s.myWorkDescription}>{props.myWorkDescription}</p>
            </div>
        </div>
    )
}
