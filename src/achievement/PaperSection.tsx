import React, {useState} from "react";
import {SubtitleWithNumber} from "../components/title";
import {paperList} from "./data";
import Pagination from "../components/pagination";

// @ts-ignore
import style from "./index.scss";


function PaperItem(props: { name: string, image: string, url: string, title: string, anchors: string, others: string }) {
    const imgElem = props.image ? (<img src={props.image} alt=""/>) : (<div>{props.title[0]}</div>)
    return (
        <div className={style.paper_item}>
            <div className={style.left_elem}>
                {imgElem}
            </div>
            <div className={style.right_elem}>
                <h3>{props.title}</h3>
                <h4>{props.anchors}</h4>
                <h5>{props.others}</h5>
            </div>
        </div>
    )
}

export default function PaperSection() {
    const length = 6;
    const [paperItems, setPaperItems] = useState(paperList.slice(0, length));

    const handlePaginationClick = (index: number) => {
        setPaperItems(paperList.slice(length * index, length * index + length));
    };

    const paperItemsElem = paperItems.map((v, i) => (<PaperItem {...v}/>));

    return (
        <div className={style.paper_section}>
            <div className={style.title_wrapper}>
                <SubtitleWithNumber number="PAPER" subtitle="代表论文" center/>
            </div>
            <div className={style.content}>
                {paperItemsElem}
            </div>
            <div className={style.pagination_wrapper}>
                <Pagination number={Math.round(paperList.length / length)} onClick={handlePaginationClick}/>
            </div>
        </div>
    )
}
