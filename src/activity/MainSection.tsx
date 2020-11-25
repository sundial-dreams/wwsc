import React, {useState} from "react";
import {SubtitleWithNumber} from "../components/title";
import {ActivityItem, PhotoCard, PhotoItem} from "./components";
import {AcademicSpeechList, photoList} from "../data/activity";

// @ts-ignore
import style from "./index.scss";
import Pagination from "../components/pagination";


export default function MainSection() {
    const length = 8;
    const [index, setIndex] = useState(0);

    const photoItems = photoList.map((v, i) => (<PhotoItem {...v} />));
    const handleClick = (index: number) => {
        setIndex(index)
    };

    const activityItems = AcademicSpeechList.slice(length * index, length * index + length).map((v, i) => (
        <ActivityItem {...v} />));

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
                </div>
                <div className={style.pagination_wrapper}>
                    <Pagination number={Math.round(AcademicSpeechList.length / length)} onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}
