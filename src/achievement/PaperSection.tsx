import React, {useState} from "react";
import {SubtitleWithNumber} from "../components/title";
import {paperList, paperList2} from "./data";
import Pagination from "../components/pagination";

// @ts-ignore
import style from "./index.scss";
import {cls} from "../utils/utils";


function PaperItem(props: { name: string, image: string, url: string, title: string, anchors: string, others: string }) {
    const imgElem = props.image ? (<img data-src={props.image} className="lazyload blur-up" alt=""/>) : (
        <div>{props.title[0]}</div>);
    const handleClick = () => {
        if (props.url) window.location.href = props.url;
    };
    return (
        <div className={style.paper_item} onClick={handleClick}>
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

function PaperTab(props: { index: number, onClick: (i: number) => void }) {
    return (
        <div className={style.paper_tab}>
            <button className={cls(props.index === 0 && style.active)} onClick={() => props.onClick(0)}>
                学术期刊论文
            </button>
            <button className={cls(props.index === 1 && style.active)} onClick={() => props.onClick(1)}>
                国际学术会议论文
            </button>
        </div>
    )
}

const allPapers = [paperList, paperList2];

export default function PaperSection() {
    const length = 6;
    const [tabIndex, setTabIndex] = useState(0);
    const [index, setIndex] = useState(0);

    const handlePaginationClick = (index: number) => {
        setIndex(index);
    };

    const handleTabClick = (index: number) => {
        setTabIndex(index);
        setIndex(0);
    }

    const paperItemsElem = allPapers[tabIndex].slice(length * index, length * index + length).map((v, i) => (
        <PaperItem {...v}/>));

    return (
        <div className={style.paper_section}>
            <div className={style.paper_tab_wrapper}>
                <PaperTab index={tabIndex} onClick={handleTabClick}/>
            </div>
            <div className={style.title_wrapper}>
                <SubtitleWithNumber number="PAPER" subtitle="代表论文" center/>
            </div>
            <div className={style.content}>
                {paperItemsElem}
            </div>
            <div className={style.pagination_wrapper}>
                <Pagination number={Math.round(allPapers[tabIndex].length / length)} onClick={handlePaginationClick}/>
            </div>
        </div>
    )
}
