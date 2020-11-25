import React from "react";
import {SubtitleWithNumber} from "../components/title";
// @ts-ignore
import style from "./index.scss";
import {companies} from "../data/graduate";


function CompanyLogoItem(props: { logo: string, name: string }) {
    const elem = props.logo ? (<img data-src={props.logo} className="lazyload blur-up" alt=""/>) : (<div>{props.name}</div>)
    return (
        <div className={style.company_logo_item}>
            {elem}
        </div>
    )
}

export default function CompanySection() {
    const companiesElem = companies.map((v, i) => (<CompanyLogoItem {...v}/>))
    return (
        <div className={style.second_section}>
            <div className={style.left_block}>
                <div className={style.title_wrapper}>
                    <SubtitleWithNumber number="COMPANIES" subtitle="公司（算法设计师、硬件设计师、应用工程师）"/>
                </div>
                <div className={style.content}>
                    <h3>设备商：华为、海思半导体、烽火通信</h3>

                    <h3>运营商：中国移动、中国电信、中国联通</h3>

                    <h3>研究院：国家航天院，各省电信研究院</h3>

                    <h3>互联网与银行：各大银行网络部门</h3>
                </div>
            </div>
            <div className={style.right_block}>
                <div className={style.companies_wrapper}>
                    {companiesElem}
                </div>
            </div>
        </div>
    )
}