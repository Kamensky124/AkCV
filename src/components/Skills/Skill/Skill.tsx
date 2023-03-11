import React from "react"
import s from "./Skill.module.css"


export type SkillTypeProps = {
    id: string,
    title: string,
    description: string,
    imgSrc: string
}

export const Skill = (props: SkillTypeProps) => {
    return (
        <div className={s.skillBox}>
            <img src={props.imgSrc} className={s.imgSkill}></img>
            <span className={s.skillTitle}>{props.title}</span>
            <p>{props.description}</p>
        </div>
    )
}
