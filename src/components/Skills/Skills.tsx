import React from "react"
import s from "./Skills.module.css"

//for skills logo
import skillsJSimg from "../../assets/img/imgSkills/JS.svg"
import skillsTSimg from "../../assets/img/imgSkills/typescript.svg"
import skillsReactImg from "../../assets/img/imgSkills/react.svg"
import skillsReduxImg from "../../assets/img/imgSkills/redux.svg"
import skillsGitHubImg from "../../assets/img/imgSkills/github.svg"

//
export const Skills = () => {
    return (
        <div className={s.skillsBoxForAll}>

            <div className={s.skillBoxForOne}>
                <img src={skillsJSimg} className={s.imgSkill}></img>
                <span className={s.skillTitle}>Javascript</span>
                <span>Main web language</span>
            </div>

            <div className={s.skillBoxForOne}>
                <img src={skillsTSimg} className={s.imgSkill}></img>
                <span className={s.skillTitle}>Typescript</span>
                <span>Main web language</span>
            </div>

            <div className={s.skillBoxForOne}>
                <img src={skillsReactImg} className={s.imgSkill}></img>
                <span className={s.skillTitle}>React</span>
                <span>Main web language</span>
            </div>
            <div className={s.skillBoxForOne}>
                <img src={skillsReduxImg} className={s.imgSkill}></img>
                <span className={s.skillTitle}>Redux</span>
                <span>Main web language</span>
            </div>
            <div className={s.skillBoxForOne}>
                <img src={skillsGitHubImg} className={s.imgSkill}></img>
                <span className={s.skillTitle}>GitHub</span>
                <span>Main web language</span>
            </div>
        </div>
    )
}
