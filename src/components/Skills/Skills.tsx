import React from "react"
import s from "./Skills.module.css"
import {v1} from 'uuid'

//for skills logo
import skillsJSimg from "../../assets/img/imgSkills/JS.svg"
import skillsTSimg from "../../assets/img/imgSkills/typescript.svg"
import skillsReactImg from "../../assets/img/imgSkills/react.svg"
import skillsReduxImg from "../../assets/img/imgSkills/redux.svg"
import skillsGitHubImg from "../../assets/img/imgSkills/github.svg"
import {Skill, SkillTypeProps} from "./Skill/Skill";

//
export const Skills = () => {

    const textAboutSkill: string = "A text about how this is very important. It will save our world, make it a better place. It would be great if everyone knew this"

    const skillsArray: Array<SkillTypeProps> = [
        {
            id: v1(),
            title: 'Javascript',
            description: textAboutSkill,
            imgSrc: skillsJSimg
        },
        {
            id: v1(),
            title: 'Typescript',
            description: textAboutSkill,
            imgSrc: skillsTSimg
        },
        {
            id: v1(),
            title: 'React',
            description: textAboutSkill,
            imgSrc: skillsReactImg
        },
        {
            id: v1(),
            title: 'Redux',
            description: textAboutSkill,
            imgSrc: skillsReduxImg
        },
        {
            id: v1(),
            title: 'GitHub',
            description: textAboutSkill,
            imgSrc: skillsGitHubImg
        },
    ]

    return (
        <div className={s.skillsBoxWrapper}>
            <div className={s.a}></div>
            <h3 className={s.skillTitle}>My skills</h3>
            <div className={s.skillBoxForSkills}>
                {skillsArray.map(sk =>
                    <Skill
                        key={sk.id}
                        id={sk.id}
                        title={sk.title}
                        description={sk.description}
                        imgSrc={sk.imgSrc}
                    />)}
            </div>
        </div>
    )
}
