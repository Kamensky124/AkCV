import React from "react"
import s from "./JobBlock.module.css"


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
            <a href={props.companySite}>{props.company}</a>
            <span>{props.speciality}</span>
            <span>{props.period}</span>
        </div>
    )
}
