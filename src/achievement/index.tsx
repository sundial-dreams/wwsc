import React from "react";
import MainSection from "./MainSection";
import PaperSection from "./PaperSection";
import ProjectSection from "./ProjectSection";

// @ts-ignore
import style from "./index.scss";
import PatentSection from "./PatentSection";


export default function AchievementPage() {
    return (
        <div className={style.achievement_page} id="page">
            <MainSection/>
            <PaperSection/>
            <PatentSection/>
            <ProjectSection/>
        </div>
    );
}
