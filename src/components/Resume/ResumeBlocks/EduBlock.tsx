import React from "react"
import s from "./EduBlock.module.css"

export type EduBlockTypeProps = {
    id: string,
    company: string,
    companySite: string,
    speciality: string,
    period: string,
    imgSrc: string
}

export const EduBlock = (props: EduBlockTypeProps) => {
    return (
        <div className={s.eduBox}>
            <img src={props.imgSrc} className={s.imgEdu}></img>
            <a href={props.companySite} className={s.eduTitleItem}>{props.company}</a>
            <span className={s.eduTitleItem}>{props.speciality}</span>
            <span className={s.eduTitleItem}>{props.period}</span>
        </div>
    )
}
