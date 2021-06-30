import React from 'react';
import Section2018 from "./Section2018";

// @ts-ignore
import style from "./index.scss";


export default function GraduationSeason() {
    return (
        <div className={style.graduation_season_page} id="page">
            <div className={style.list}>
                <Section2018/>
            </div>
        </div>
    )
}