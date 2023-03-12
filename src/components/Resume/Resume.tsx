import React from "react"
import s from "./Resume.module.css"
import resumeKNFMPimg from "../../assets/img/imgExp/knfmp logo.jpeg"
import resumeRosneftimg from "../../assets/img/imgExp/rosneft logo.jpeg"
import resumeSFUimg from "../../assets/img/imgExp/sfu logo.svg"
import resumeITIncimg from "../../assets/img/imgExp/Incubator.jpeg"
import {v1} from "uuid";
import {JobBlock, JobBlockTypeProps} from "./ResumeBlocks/JobsBlock";
import {EduBlock, EduBlockTypeProps} from "./ResumeBlocks/EduBlock";

//
export const Resume = () => {

    const JobsArray: Array<JobBlockTypeProps> = [
        {
            id: v1(),
            company: 'Rosneft oil company',
            companySite: 'https://www.rosneft.com/',
            position: 'Business analyst',
            achievements: [
                {
                    idArch: v1(),
                    textArch: 'Optimized the procedure for generating business plan calculations using VBA and excel unification, increasing the collection speed from 1 hour to 20 minutes.'
                },
                {
                    idArch: v1(),
                    textArch: 'Prepared technical specifications for changing SAP configuration according to business needs after restructuring.'
                },
                {
                    idArch: v1(),
                    textArch: 'Timely prepared explanations for shareholders on deviations in management reporting for 2022.'
                },
                {
                    idArch: v1(),
                    textArch: 'Increased the speed of generating regular management reports for top management through the use of VBA and the unification of excel.'
                },
            ],
            period: '2016-2022',
            imgSrc: resumeRosneftimg
        },
        {
            id: v1(),
            company: 'JSC «Krastsvetmet»',
            companySite: 'https://www.krastsvetmet.ru/',
            position: 'Cost-engineer of construction projects',
            achievements: [
                {
                    idArch: v1(),
                    textArch: 'Increased the speed of forming a package of documentation for conducting procedures from 1 week to 3 days.'
                },
                {
                    idArch: v1(),
                    textArch: 'Optimized the procedure for calculating the cost and detecting errors, which increased the speed of concluding additional agreements and starting construction works from 3 days to 2 days.'
                },
                {
                    idArch: v1(),
                    textArch: 'Participated in the formation of the terms of reference for the creation of an electronic archive of project documentation in SharePoint.'
                }
            ],
            period: '2013-2016',
            imgSrc: resumeKNFMPimg
        },
        {
            id: v1(),
            company: 'JSC «Krastsvetmet»',
            companySite: 'https://www.krastsvetmet.ru/',
            position: 'Investment analyst',
            achievements: [
                {
                    idArch: v1(),
                    textArch: 'Optimized the procedure for forming an investment plan, increasing the speed of analytics and presentation prepare for CEOs from 1 month to 2 weeks.'
                },
                {
                    idArch: v1(),
                    textArch: 'Participated in the formation of the technical part of the new investment project management system, accelerating the implementation of technical tasks from 2 months to 5 weeks.'
                },
            ],
            period: '2012-2013',
            imgSrc: resumeKNFMPimg
        },
        {
            id: v1(),
            company: 'JSC «Krastsvetmet»',
            companySite: 'https://www.krastsvetmet.ru/',
            position: 'Economist, engineer of energetics',
            achievements: [
                {
                    idArch: v1(),
                    textArch: 'Prepared an economic justification for the introduction of an hourly electricity report system, savings from the introduction of more than 1 million rubles.'
                },
                {
                    idArch: v1(),
                    textArch: 'Optimized the speed and implemented additional error checking mechanisms in the calculations of the budget and business plan of the energy departments of the enterprise, increasing the speed of data acceptance from 1 week to 3 days.'
                }
            ],
            period: '2005-2012',
            imgSrc: resumeKNFMPimg
        },
    ]
    const EduArray: Array<EduBlockTypeProps> = [
        {
            id: v1(),
            speciality: 'Frontend developer',
            company: 'IT-Incubator, Minsk, Belarus',
            companySite: 'https://it-incubator.io/',
            period: '2023',
            imgSrc: resumeITIncimg
        },
        {
            id: v1(),
            speciality: 'Еconomist – manager (in energetics)',
            company: 'Siberian federal university, Krasnoyarsk, Russia',
            companySite: 'https://www.sfu-kras.ru/en',
            period: '2004-2007',
            imgSrc: resumeSFUimg
        },
        {
            id: v1(),
            speciality: 'Сomputer scientist - social psychologist',
            company: 'Siberian federal university, Krasnoyarsk, Russia',
            companySite: 'https://www.sfu-kras.ru/en',
            period: '2000-2005',
            imgSrc: resumeSFUimg
        },
    ]

    return (
        <div className={s.resume}>
            <div className={s.a}></div>
            <h3>Experience</h3>
            {JobsArray.map(jb =>
                <JobBlock
                    key={jb.id}
                    id={jb.id}
                    company={jb.company}
                    companySite={jb.companySite}
                    position={jb.position}
                    period={jb.period}
                    achievements={jb.achievements}
                    imgSrc={jb.imgSrc}
                />)}
            <h3>Education</h3>
            {EduArray.map(jb =>
                <EduBlock
                    key={jb.id}
                    id={jb.id}
                    company={jb.company}
                    companySite={jb.companySite}
                    speciality={jb.speciality}
                    period={jb.period}
                    imgSrc={jb.imgSrc}
                />)}
        </div>
    )
}
