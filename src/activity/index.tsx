import React from "react";
import MainSection from "./MainSection";
import SecondSection from "./SecondSection";
import ProfessorSection from "./ProfessorSection";

// @ts-ignore
import style from "./index.scss";

export default function ActivityPage() {
    return (
        <div id="page" className={style.activity_page}>
            <MainSection/>
            <SecondSection/>
            <ProfessorSection/>
        </div>
    );
}