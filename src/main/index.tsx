import React from 'react';
import ReactDOM from 'react-dom';
import {useHistory} from "react-router";
import {Routers} from "../utils/constants";
import {cls} from "../utils/utils";

import MainSection from "./MainSection";
import HistorySection from "./HistorySection";

import ResearchSection from "./ResearchSection";
import CultivateSection from "./CultivateSection";
import TutorSection from "./TutorSection";

// @ts-ignore
import style from './index.scss';

export default function MainPage() {
    return (
        <div id="page" className={style.main_page}>
            <MainSection/>
            <HistorySection/>
            <ResearchSection/>
            <CultivateSection/>
            <TutorSection/>
        </div>
    )
}