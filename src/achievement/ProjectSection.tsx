import React, {useState} from 'react';
// @ts-ignore
import style from './index.scss';
import {SubtitleWithNumber} from "../components/title";
import {projectList} from "../data/achievement";
import Pagination from "../components/pagination";


function ProjectItem(props: { index: number, name: string, status: string, foundation: string, holder: string, number: string, time: string, funding: string }) {
    const index = props.index >= 10 ? props.index : `0${props.index}`;
    return (
        <div className={style.project_item}>
            <div className={style.left}>
                {index}
            </div>
            <div className={style.right}>
                <h3>{props.name}</h3>
                <h4>
                    {props.holder && <span>{props.holder}主持</span>}
                    <span>{props.status}</span><span>{props.foundation}</span>
                </h4>
                <h5>
                    {props.number && <span>编号: {props.number}</span>}
                    <span>{props.time}</span>
                    {props.funding && <span>经费: {props.funding}</span>}
                </h5>
            </div>
        </div>
    )
}

export default function ProjectSection() {
    const length = 12;
    const [index, setIndex] = useState(0);

    const handlePaginationClick = (index: number) => {
        setIndex(index);
    }

    const projectItemsElem = projectList.slice(length * index, length * index + length).map((v, i) =>(<ProjectItem {...v} index={(i + 1) + index * length}/>));

    return (
        <div className={style.project_section}>
            <div className={style.title_wrapper}>
                <SubtitleWithNumber number="PROJECT" subtitle="项目" center/>
            </div>
            <div className={style.project_list}>
                {projectItemsElem}
            </div>
            <div className={style.pagination_wrapper}>
                <Pagination number={Math.round(projectList.length / length)} onClick={handlePaginationClick}/>
            </div>
        </div>
    )
}