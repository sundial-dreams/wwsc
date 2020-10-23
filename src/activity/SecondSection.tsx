import {SubtitleWithNumber} from "../components/title";
import React from "react";
import {activityList, photoList} from "./data";

// @ts-ignore
import style from "./index.scss";
import {ActivityItem, PhotoCard, PhotoItem} from "./components";

export default function SecondSection() {
    const photoItems = photoList.slice(2).map((v, i) => (<PhotoItem {...v} />));

    const activityItems = activityList.map((v, i) => (<ActivityItem {...v} />));
    return (
        <div className={style.second_section}>
            <div className={style.left_block}>
                <div className={style.activity_title}>
                    <SubtitleWithNumber number="02" subtitle="产学研访问研讨"/>
                </div>
                <div className={style.activity_item_wrapper}>
                    {activityItems}
                    <button className={style.more_btn}>+ more</button>
                </div>
            </div>
            <div className={style.right_block}>
                <PhotoCard photoItems={photoItems}/>
            </div>
        </div>
    )
}
