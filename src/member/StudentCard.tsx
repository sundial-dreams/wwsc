import React from "react";
import {cls} from "../utils/utils";
import Pagination from "../components/pagination";
import {studentList1, studentList2, studentList3} from "./data";
// @ts-ignore
import style from "./index.scss";

function StudentPhoto(props: { level: string, name: string, avatar: string }) {
    const number = Math.floor(30 * Math.random() - 15);
    const rotateStyle = {
        transform: `rotate(${number}deg)`
    };
    return (
        <div className={style.student_avatar}>
            <img src={props.avatar} alt=""/>
            <span>{props.level} | {props.name}</span>
        </div>
    )
}

export function Card01() {
    const s = studentList1.map((v, i) => (<StudentPhoto {...v}/>))
    return (
        <div className={cls(style.card, style.card_01)}>
            <div className={style.title_wrapper}>
                <h2>
                    01
                    <span>博士后与在读博士生</span>
                </h2>
            </div>
            <div className={style.student_wrapper}>
                {s}
            </div>
            <div className={style.pagination_wrapper}>
                <Pagination number={4} onClick={console.log}/>
            </div>
        </div>
    )
}

export function Card02() {
    const s = studentList2.map((v, i) => (<StudentPhoto {...v}/>));
    return (
        <div className={cls(style.card, style.card_02)}>
            <div className={style.title_wrapper}>
                <h2>
                    02
                    <span>在读研究生</span>
                </h2>
            </div>
            <div className={style.student_wrapper}>
                {s}
            </div>
            <div className={style.pagination_wrapper}>
                <Pagination number={4} onClick={console.log}/>
            </div>
        </div>
    )
}


export function Card03() {
    const s = studentList3.map((v, i) => (<StudentPhoto {...v}/>))

    return (
        <div className={cls(style.card, style.card_03)}>
            <div className={style.title_wrapper}>
                <h2>
                    03
                    <span>研一新生</span>
                </h2>
            </div>
            <div className={style.student_wrapper}>
                {s}
            </div>
            <div className={style.pagination_wrapper}>
                <Pagination number={4} onClick={console.log}/>
            </div>
        </div>
    )
}