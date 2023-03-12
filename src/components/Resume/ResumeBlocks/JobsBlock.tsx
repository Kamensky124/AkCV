import React from "react"
import s from "./JobBlock.module.css"


export type JobBlockTypeProps = {
    id: string,
    company: string,
    companySite: string,
    position: string,
    period: string,
    achievements: Array<achievementType>,
    imgSrc: string
}

export type achievementType = {
    idArch: string,
    textArch: string
}

export const JobBlock = (props: JobBlockTypeProps) => {
    return (
        <div className={s.jobBox}>

            <div className={'jobTitleWrapper'}>
                <span className={'jobPosition'}>{props.position}</span>
                <span className={'jobCompanyLogo'}><img src={props.imgSrc} className={s.imgJob}></img></span>
                <span className={'jobCompanyTitle'}><a href={props.companySite}>{props.company}</a></span>
                <span className={'jobCompanyPeriod'}>{props.period}</span>
            </div>
            <div className={'JobArchievementsBox'}>
                <ul>
                    {props.achievements.map(arch =>
                        <li
                            key={arch.idArch}
                            className={s.jobArchievementText}>
                            {arch.textArch}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

