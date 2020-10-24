import React from "react";
import {SubtitleWithNumber} from "../components/title";
// @ts-ignore
import style from "./index.scss";
import {phdList} from "./data";

function PhDItem(props: { avatar: string, name: string, year: string, intro: string }) {
    const avatar = props.avatar ? (<img alt="" data-src={props.avatar} className="lazyload blur-up"/>) : <div>{props.name[0]}</div>;
    return (
        <div className={style.phd_item}>
            <div className={style.left}>
                {avatar}
            </div>
            <div className={style.right}>
                <h3>{props.name} | {props.year}</h3>
                <p>{props.intro}</p>
            </div>
        </div>
    )
}

export default function PhDSection() {
    const phdItems = phdList.map((v, i) => <PhDItem {...v}/>);
    return (
        <div className={style.phd_section}>
            <div className={style.title_wrapper}>
                <SubtitleWithNumber number="GRADUATE OF PHD" subtitle="博士生去向" center/>
            </div>
            <div className={style.content}>
                <div className={style.phd_list}>
                    {phdItems}
                </div>
            </div>
        </div>
    )
}