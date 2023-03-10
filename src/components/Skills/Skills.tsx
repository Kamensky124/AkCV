import React from "react"
import s from "./Skills.module.css"

//for skills logo
import skillsJSimg from "../../assets/img/imgSkills/JS.svg"
import  skillsTSimg from "../../assets/img/imgSkills/typescript.svg"
import skillsReactImg from "../../assets/img/imgSkills/react.svg"
import skillsReduxImg from "../../assets/img/imgSkills/redux.svg"
import skillsGitHubImg from "../../assets/img/imgSkills/github.svg"

//
export const Skills = () => {
    return (
        <div className={s.skills}>

            <div>
                <img src={skillsJSimg} className={s.img}></img>
                <span>Javascript</span>
            <span>Main web language</span>
            </div>

            <div><img src={skillsTSimg} className={s.img}></img>Typescript</div>
            <div><img src={skillsReactImg} className={s.img}></img>React</div>
            <div><img src={skillsReduxImg} className={s.img}></img>Redux</div>
            <div><img src={skillsGitHubImg} className={s.img}></img>GitHub</div>
        </div>
    )
}
