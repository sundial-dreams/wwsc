import React from "react";
import MainSection from "./MainSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

// @ts-ignore
import style from "./index.scss";

export default function ActivityPage() {
    return (
        <div id="page" className={style.activity_page}>
            <MainSection/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    );
}