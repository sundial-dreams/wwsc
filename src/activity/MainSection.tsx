import React from "react";
import {SubtitleWithNumber} from "../components/title";

import {ActivityItem, PhotoCard, PhotoItem} from "./components";
// @ts-ignore
import style from "./index.scss";
import {activityList, photoList} from "./data";





export default function MainSection() {

    const photoItems = photoList.map((v, i) => (<PhotoItem {...v} />));

    const activityItems = activityList.map((v, i) => (<ActivityItem {...v} />));

    return (
        <div className={style.main_section}>
            <div className={style.left_block}>
                <PhotoCard photoItems={photoItems}/>
            </div>
            <div className={style.right_block}>
                <div className={style.activity_title}>
                    <SubtitleWithNumber number="01" subtitle="学术演讲与访问"/>
                </div>
                <div className={style.activity_item_wrapper}>
                    {activityItems}
                    <button className={style.more_btn}>+ more</button>
                </div>
            </div>
        </div>
    )
}
