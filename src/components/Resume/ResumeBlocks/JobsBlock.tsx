import React from "react"
import s from "./JobBlock.module.css"


export type JobBlockTypeProps = {
    id: string,
    company: string,
    companySite: string,
    position: string,
    period: string,
    achievement1?: string,
    achievement2?: string,
    achievement3?: string,
    achievement4?: string,
    imgSrc: string
}

export const JobBlock = (props: JobBlockTypeProps) => {
    return (
        <div className={s.jobBox}>
            <img src={props.imgSrc} className={s.imgJob}></img>
            <a href={props.companySite}>{props.company}</a>
            <span>{props.position}</span>
            <span>{props.period}</span>
            <ul>
            <li>{props.achievement1}</li>
                <li>{props.achievement2}</li>
            </ul>
        </div>
    )
}

