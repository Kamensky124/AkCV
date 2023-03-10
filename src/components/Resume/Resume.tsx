import React from "react"
import s from "./Resume.module.css"
import resumeKNFMPimg from "../../assets/img/imgExp/knfmp logo.jpeg"
import resumeRosneftimg from "../../assets/img/imgExp/rosneft logo.jpeg"
import resumeSFUimg from "../../assets/img/imgExp/sfu logo.svg"
import resumeITIncimg from "../../assets/img/imgExp/Incubator.jpeg"

//
export const Resume = ()  =>{
    return (
    <div className={s.resume}>
        Experience
        <table>
            <tr>
                <img src={resumeRosneftimg} className={s.img}></img>
                <td>Business analyst</td>
                <td><a href="https://www.linkedin.com/in/andrey-kamensky-987883b2/"> Rosneft oil company</a></td>
                <td>2016-2022</td>
            </tr>
            <tr>
                <td colspan="3">Optimized the procedure for generating business plan calculations using VBA and excel unification, increasing the collection speed from 1 hour to 20 minutes.
                    Prepared technical specifications for changing SAP configuration according to business needs after restructuring
                    Timely prepared explanations for shareholders on deviations in management reporting for 2022
                    Increased the speed of generating regular management reports for top management through the use of VBA and the unification of excel
                </td>
            </tr>
            <tr>
                <img src={resumeKNFMPimg} className={s.img}></img>
                <td>Cost-engineering of construction projects </td>
                <td><a href="https://www.krastsvetmet.ru/">JSC «Krastsvetmet»</a></td>
                <td>2013-2016</td>
            </tr>
            <tr>
                <td colspan="3">Increased the speed of forming a package of documentation for conducting procedures from 1 week to 3 days
                    Optimized the procedure for calculating the cost and detecting errors, which increased the speed of concluding additional agreements and starting construction works from 3 days to 2 days
                    Participated in the formation of the terms of reference for the creation of an electronic archive of project documentation in SharePoint
                </td>
            </tr>
            <tr>
                <img src={resumeKNFMPimg} className={s.img}></img>
                <td>Investment analyst</td>
                <td>JSC «Krastsvetmet»</td>
                <td>2012-2013</td>
            </tr>
            <tr>
                <td colspan="3">Optimized the procedure for forming an investment plan, increasing the speed of analytics and presentation prepare for CEOs from 1 month to 2 weeks
                    Participated in the formation of the technical part of the new investment project management system, accelerating the implementation of technical tasks from 2 months to 5 weeks
                </td>
            </tr>
            <tr>
                <img src={resumeKNFMPimg} className={s.img}></img>
                <td>Economist, engineer of energetics</td>
                <td>JSC «Krastsvetmet»</td>
                <td>2005-2012</td>
            </tr>
            <tr>
                <td colspan="3">Prepared an economic justification for the introduction of an hourly electricity report system, savings from the introduction of more than 1 million rubles
                    Optimized the speed and implemented additional error checking mechanisms in the calculations of the budget and business plan of the energy departments of the enterprise, increasing the speed of data acceptance from 1 week to 3 days
                </td>
            </tr>
        </table>

        Main education
        <table>
            <tr>
                <img src={resumeITIncimg} className={s.img}></img>
                <td>Frontend developer</td>
                <td>IT-Incubator, Minsk, Belarus</td>
                <td>2023</td>
            </tr>
            <tr>
                <img src={resumeSFUimg} className={s.img}></img>
                <td>Еconomist – manager (in energetics)</td>
                <td>Siberian federal university, Krasnoyarsk, Russia</td>
                <td>2004-2007</td>
            </tr>
            <tr>
                <img src={resumeSFUimg} className={s.img}></img>
                <td>Сomputer scientist - social psychologist</td>
                <td>Siberian federal university, Krasnoyarsk, Russia</td>
                <td>2000-2005</td>
            </tr>
        </table>
    </div>
)}
