import {cls} from "../utils/utils";
import React from "react";
// @ts-ignore
import style from "./index.scss";

export default function HistorySection() {

    return (
        <div className={cls(style.section, style.history_section)}>
            <div className={style.title}>
                <h2>
                    <span className={style.title_bg}>HISTORY OF LAB</span>
                    <span>实验室发展历程</span>
                </h2>
                <p>混沌调制领域的领导者，原模图LDPC码领域的驱动者</p>
            </div>
            <div className={style.section_content}>

            </div>
        </div>
    )
}
