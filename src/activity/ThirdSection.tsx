import React from 'react';
import Title from "../components/title";
import {professorList} from "./data";
import {ProfessorInfoCard} from "./components";
import modal from "../components/modal";

// @ts-ignore
import style from "./index.scss";


function ProfessorAvatar(props: { avatar: string, name: string, onClick: () => void }) {
    return (
        <div className={style.professor_avatar_wrapper}>
            <div className={style.professor_avatar} onClick={props.onClick}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={style.professor_info}>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default function ThirdSection() {

    const professors = professorList.map((v, i) => {
        const handleClick = () => {
            modal((cancel) => <ProfessorInfoCard cancel={cancel} { ...v }/>);
        };
        return (<ProfessorAvatar {...v} onClick={handleClick}/>);
    });
    return (
        <div className={style.third_section}>
            <div className={style.title_wrapper}>
                <Title mainTitle="合作与联系" subtitle="TEACHER"/>
            </div>
            <div className={style.professor_list}>
                {professors}
            </div>
        </div>
    )
}
