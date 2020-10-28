import React, {useState} from 'react';
import {SubtitleWithNumber} from "../components/title";
import Pagination from "../components/pagination";
import {patentList} from "./data";

// @ts-ignore
import style from "./index.scss";



function PatentItem(props: { name: string, anchors: string, number: string, time: string, class: string }) {
    return (
        <div className={style.patent_item}>
            <h3>{props.name}</h3>
            <h4><span>{props.anchors}</span><span>{props.time}</span></h4>
            <h5><span>{props.number}</span><span>{props.class}</span></h5>
        </div>
    )
}

export default function PatentSection() {
    const length = 12;
    const [index, setIndex] = useState(0);

    const handlePaginationClick = (index: number) => {
        setIndex(index);
    }

    const patentListItems = patentList.slice(length * index, length * index + length).map((v, i) => (<PatentItem {...v}/>));

    return (
        <div className={style.patent_section}>
            <div className={style.title_wrapper}>
                <SubtitleWithNumber number="PATENT" subtitle="专利" center/>
            </div>
            <div className={style.patent_list}>
                {patentListItems}
            </div>
            <div className={style.pagination_wrapper}>
                <Pagination number={Math.round(patentList.length / length)} onClick={handlePaginationClick}/>
            </div>
        </div>
    )
}
