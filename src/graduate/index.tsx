import React from "react";
import MainSection from "./MainSection";
import CompanySection from "./CompanySection";
import PhDSection from "./PhDSection";

// @ts-ignore
import style from "./index.scss"



export default function GraduatePage(): React.ReactElement {
    return (
        <div className={style.graduate_page} id="page">
            <MainSection/>
            <CompanySection/>
            <PhDSection/>
        </div>
    )
}