import React from "react";
// @ts-ignore
import style from "./index.scss";
import {SubtitleWithNumber} from "../components/title";
import {otherStudentList, studentList} from "./data";

function StudentItem(props: { avatar: string, level: string, name: string, intro: string }) {
    return (
        <div className={style.student_item}>
            <div className={style.left}>
                <div className={style.avatar_wrapper}>
                    <img src={props.avatar} alt=""/>
                </div>
            </div>
            <div className={style.right}>
                <h3>{props.name}</h3>
                <h4>{props.level}</h4>
                <p>{props.intro}</p>
            </div>
        </div>
    )
}


function OtherStudentItem(props: { name: string, index: number }) {
    return (
        <div className={style.other_student_item}>
            {/*<span>{ (props.index < 10 ? '0' : '') + props.index }</span>*/}
            <p>{props.name}</p>
        </div>
    )
}


export default function MainSection() {
    const items = studentList.map((v, i) => (<StudentItem {...v}/>));
    const otherItems = otherStudentList.map((v, i) => (<OtherStudentItem index={i + 1} {...v}/>))
    return (
        <div className={style.main_section}>
            <div className={style.left_block}>
                <div className={style.student_list}>
                    {items}
                </div>
            </div>
            <div className={style.right_block}>
                <div className={style.title_wrapper}>
                    <SubtitleWithNumber number="ADVANCED STUDIES" subtitle="继续深造（攻博，海外与国内）"/>
                </div>
                <div className={style.content}>
                    <div className={style.other_student_list}>
                        { otherItems }
                    </div>
                </div>
            </div>
        </div>
    )
}