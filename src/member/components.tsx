import React from 'react';
// @ts-ignore
import style from './index.scss';
import {imageUrl} from "../utils/utils";

export function StudentInfoCard(props: { cancel: () => void, name: string, avatar: string, level: string, fields: string, email: string, classOf: string, selfIntro: string[] }) {
    return (
        <div className={style.student_info_card}>
            <button className={style.close_btn} onClick={props.cancel}>+</button>
            <div className={style.avatar_block}>
                <div className={style.left}>
                    <img data-src={props.avatar} alt="" className="lazyload blur-up"/>
                </div>
                <div className={style.right}>
                    <h3>{props.name} | {props.level}</h3>
                    <h4>{props.classOf}</h4>
                    <h5>Email: {props.email}</h5>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.fields}>
                    <h3>研究领域：</h3>
                    <p>{props.fields}</p>
                </div>
                <div className={style.self_intro}>
                    <h3>介绍：</h3>
                    {props.selfIntro.map((v) => <p>{v}</p>)}
                </div>
            </div>
        </div>
    )
}