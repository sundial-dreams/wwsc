import {SubtitleWithNumber} from "../components/title";
import React, {useState} from "react";
import {companyInterviewList, photoList} from "./data";

import {ActivityItem, PhotoCard, PhotoItem} from "./components";
// @ts-ignore
import style from "./index.scss";
import Pagination from "../components/pagination";

export default function SecondSection() {
    const [index, setIndex] = useState(0);
    const length = 7;
    const photoItems = photoList.slice(2).map((v, i) => (<PhotoItem {...v} />));

    const handleClick = (index: number) => {
        setIndex(index)
    };

    const activityItems = companyInterviewList.slice(length * index, length * index + length).map((v, i) => (<ActivityItem {...v} />));
    return (
        <div className={style.second_section}>
            <div className={style.left_block}>
                <div className={style.activity_title}>
                    <SubtitleWithNumber number="02" subtitle="产学研访问研讨"/>
                </div>
                <div className={style.activity_item_wrapper}>
                    {activityItems}
                </div>
                <div className={style.pagination_wrapper}>
                    <Pagination number={Math.round(companyInterviewList.length / length)} onClick={handleClick}/>
                </div>
            </div>
            <div className={style.right_block}>
                <PhotoCard photoItems={photoItems}/>
            </div>
        </div>
    )
}
