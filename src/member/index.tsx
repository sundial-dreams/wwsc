import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';

import {Routers} from "../utils/constants";
import {cls} from '../utils/utils';


//@ts-ignore
import style from './index.scss';

const tutorList = [
    {
        avatar: require("~resources/images/wl.jpeg").default,
        name: "王琳",
        position: "教授",
        researchAreas: "宽带无线通信、信息论与编码",
        intro: "教育部新世纪优秀人才、中国电子学会理事"
    },
    {
        avatar: require("~resources/images/xlk.jpeg").default,
        name: "徐立凯",
        position: "副教授",
        researchAreas: "超宽带与混沌通信",
        intro: ""
    },
    {
        avatar: require("~resources/images/hsh.jpeg").default,
        name: "洪少华",
        position: "副教授",
        researchAreas: "图像处理、压缩，信源信道联合编码",
        intro: ""
    },
];


const studentList = [
    {
        avatar: require("~resources/images/member/dpf.jpg").default,
        name: "邓鹏飞",
        level: "硕士",
        researchAreas: "",
        intro: "小菜🐔一个"
    },
    {
        avatar: require("~resources/images/member/cxm.jpg").default,
        name: "蔡相明",
        level: "博士",
        researchAreas: "调制",
        intro: "大佬",

    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-b.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-b.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-b.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-b.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-a.jpg").default,
        name: "undefined",
        level: "硕士"
    },
    {
        avatar: require("~resources/images/member/test-b.jpg").default,
        name: "undefined",
        level: "硕士"
    },
];


function TutorCard(props: { avatar: string, name: string, position: string, researchAreas: string, intro?: string }): React.ReactElement {
    return (
        <div className={cls(style.tutor_card, style.tutor_xlk_card)}>
            <div className={style.avatar_block}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={style.intro_block}>
                <h3>{props.name}<span> | {props.position}</span></h3>
                <h4>研究方向: <span>{props.researchAreas}</span></h4>
                <p>{props?.intro}</p>
            </div>
        </div>
    )
}

function StudentCard(props: { avatar: string, level: string, name: string, intro?: string, researchAreas?: string }) {
    return (
        <div className={style.student_item}>
            <img src={props.avatar} alt=""/>
            <div className={style.student_name}>
                {props.level} | {props.name}
            </div>
            <div className={style.student_mask}>
                <h4>研究领域: <span>{props?.researchAreas}</span></h4>
                <p>{props?.intro}</p>
            </div>
        </div>
    )
}


export default function MemberPage() {
    const [position, setPosition] = useState(0);
    const history = useHistory();

    const onClick = () => history.push(Routers.MAIN);
    const tutorCard = tutorList.map((tutor, i) => <TutorCard key={i} {...tutor} />);

    const studentCards = studentList.map((student, i) => <StudentCard key={i} {...student}/>);


    const handleLeftBtnClick = () => {
        const width = document.documentElement.clientWidth;
        const newPosition = position - width;
        if (newPosition < 0) return;
        setPosition(newPosition);
    };

    const handleRightBtnClick = () => {
        const width = document.documentElement.clientWidth;
        const newPosition = position + width;
        if (newPosition > width) return;
        setPosition(newPosition);
    };

    return (
        <div id="page" className={style.member_page}>
            <div className={style.tutor_section}>
                <div className={style.left_block}>
                    {tutorCard}
                </div>
                <div className={style.right_block}>
                    <h2>全职导师</h2>
                    <p>function main() {}</p>
                </div>
            </div>
            <div className={style.student_section}>
                <div className={style.title_block}>
                    <h2>学生</h2>
                </div>
                <div className={style.student_block}>
                    <button className={style.left_btn} onClick={handleLeftBtnClick}>&lt;</button>
                    <button className={style.right_btn} onClick={handleRightBtnClick}>&gt;</button>
                    <div className={style.student_list} style={{left: - position + "px"}}>
                        {studentCards}
                    </div>
                </div>
            </div>
        </div>
    )
}

