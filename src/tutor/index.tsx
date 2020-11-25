import React from 'react';
import {tutorInfoMap} from "./data";
import {parser} from "../utils/utils";

//@ts-ignore
import style from "./index.scss";

const urlPrefix = "https://cmsadmin.xmu.edu.cn/system/_owners/wwcs/_webprj/pdf";

export default function TutorPage() {
    const [, pathname] = window.location.href.split("#");
    const [, search] = pathname.split("?");
    const id = parser(search).tutor_id;
    console.log(search);
    let tutor = (tutorInfoMap as any)[id];

    tutor = tutor ? tutor : tutorInfoMap.wanglin;

    return (
        <div id="page" className={style.tutor_page}>
            <div className={style.tutor_info_block}>
                <div className={style.left_block}>
                    <h2>{tutor.name} | {tutor.position}</h2>
                    <h4>研究领域：{tutor.field}</h4>
                    <h6>Email: <a href={`mailto: ${tutor.email}`}>{tutor.email}</a></h6>
                    <h6>Resume: <a href={`${urlPrefix}/${id}.pdf`}>{tutor.name}的简历</a></h6>
                </div>
                <div className={style.right_block}>
                    <div className={style.tutor_avatar}>
                        <img data-src={tutor.avatar} className="lazyload blur-up" alt=""/>
                    </div>
                </div>
            </div>

            <div className={style.tutor_introduce_block}>
                <h2>基本介绍:</h2>
                {tutor.selfIntros.map((v: string) => <p>{v}</p>)}
            </div>
            <div className={style.other_tutor_block}>

            </div>
        </div>
    )
}