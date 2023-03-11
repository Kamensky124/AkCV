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

    const skillsArray: Array<SkillTypeProps> = [
        {
            id: v1(),
            title: 'Javascript',
            description: 'Some meaningful words about title',
            imgSrc: skillsJSimg
        },
        {
            id: v1(),
            title: 'Typescript',
            description: 'Some meaningful words about title',
            imgSrc: skillsTSimg
        },
        {
            id: v1(),
            title: 'React',
            description: 'Some meaningful words about title',
            imgSrc: skillsReactImg
        },
        {
            id: v1(),
            title: 'Redux',
            description: 'Some meaningful words about title',
            imgSrc: skillsReduxImg
        },
        {
            id: v1(),
            title: 'GitHub',
            description: 'Some meaningful words about title',
            imgSrc: skillsGitHubImg
        },
    ]

    return (
        <div className={s.skillsBoxForAll}>
            <p className={s.skillTitle}>My skills</p>
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
