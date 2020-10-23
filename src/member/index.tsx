import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router';

import TutorCard from "./TutorCard";
import {Card01, Card02, Card03} from "./StudentCard";
import Title, {SubtitleWithNumber, TitlePosition} from "../components/title";
import {tutorList} from "./data";
import {Routers} from "../utils/constants";

//@ts-ignore
import style from './index.scss';



const StudentTitleCard = () => (
    <div className={style.student_title_card}>
        <SubtitleWithNumber number="STUDENT" subtitle="学生"/>
        <div className={style.content_text}>
            <p>目前博士后一人</p>
            <p>在校博士生n人</p>
            <p>在校研究生n人</p>
        </div>
    </div>
);


export default function MemberPage() {
    const [position, setPosition] = useState(0);
    const history = useHistory();
    const studentBlockRef = useRef(null);

    const tutorCard = tutorList.map((tutor, i) => <TutorCard key={i} {...tutor} />);

    useEffect(() => {
        const studentBlock = studentBlockRef.current as unknown as HTMLElement;
        let x, y, mx, my, dx: number, dy: number, drag = false;

        studentBlock.addEventListener("mousedown", (e) => {
            e.preventDefault();
            drag = true;
            x = e.clientX;
            y = e.clientY;
            mx = studentBlock.offsetLeft;
            my = studentBlock.offsetTop;
            dx = x - mx;
            dy = y - my;
        });

        document.addEventListener("mousemove", (e) => {
            e.preventDefault();
            if (!drag) return;
            let left = e.clientX - dx;
            if (left > 0) return;
            console.log(left, studentBlock.offsetWidth);
            if (-left > studentBlock.offsetWidth) return;
            studentBlock.style.left = left + "px";
        });

        studentBlock.addEventListener("mouseup", (e) => {
            e.preventDefault();
            drag = false;
        });

        studentBlock.addEventListener("mouseleave", (e) => {
            e.preventDefault();
            drag = false;
        } );

    }, []);

    return (
        <div id="page" className={style.member_page}>
            <div className={style.tutor_section}>
                <div className={style.left_block}>
                    {tutorCard}
                </div>
                <div className={style.right_block}>
                    <SubtitleWithNumber subtitle="全职导师" number="TUTOR"/>
                    <div className={style.content_text}>
                        <p>教育部新世纪优秀人才，教授、博导一人</p>
                        <p>副教授两人</p>
                        <p>博士后一人</p>
                    </div>
                </div>
            </div>
            <div className={style.student_section}>
                <div className={style.student_block}>
                    <div className={style.student_list} ref={studentBlockRef} style={{left: -position + "px"}}>
                        <StudentTitleCard/>
                        <Card01/>
                        <Card02/>
                        <Card03/>
                    </div>
                </div>
            </div>
        </div>
    )
}

