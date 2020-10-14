import React from "react";
import {useHistory} from "react-router";
import {Routers} from "../utils/constants";
import {cls} from "../utils/utils";

// @ts-ignore
import style from "./index.scss";

// TODO 图片

const tutorsInfo = [
    {avatar: require("~resources/images/wl.jpeg").default, name: "王琳", position: "教授", researchAreas: "宽带无线通信、信息论与编码", intro: "教育部新世纪优秀人才、中国电子学会理事"},
    {avatar: require("~resources/images/xlk.jpeg").default, name: "徐立凯", position: "副教授", researchAreas: "超宽带与混沌通信", intro: ""},
    {avatar: require("~resources/images/hsh.jpeg").default, name: "洪少华", position: "副教授",  researchAreas: "图像处理、压缩，信源信道联合编码", intro: ""},
];

export default function TutorSection() {
    const history = useHistory();

    const infoCardList = tutorsInfo.map((info, i) => {
        return (
            <div className={style.tutor_card} onClick={() => history.push(Routers.TUTOR)}>
                <div className={style.tutor_avatar_block}>
                    <img src={info.avatar} alt=""/>
                </div>
                <div className={style.tutor_information_block}>
                    <h4>{ info.researchAreas }</h4>
                    <h5>{ info.name } | { info.position }</h5>
                    <p>{ info.intro }</p>
                </div>
                <button className={style.more_info_btn}>
                    <svg className={style.arrow_down_svg_icon} viewBox="0 0 1024 1024" width="200" height="200">
                        <path d="M486.969 1014.101l-.683-.625-306.745-315.279a34.133 34.133 0 0 1 0-47.616l3.015-3.072a34.133 34.133 0 0 1 48.242-.682l.683.682 238.478 245.078-.057-858.454A34.133 34.133 0 0 1 504.036 0h3.3a34.133 34.133 0 0 1 34.132 34.133v870.97l250.653-257.594a34.133 34.133 0 0 1 48.242-.682l.682.682 3.015 3.072a34.133 34.133 0 0 1 0 47.616l-306.744 315.279a34.076 34.076 0 0 1-26.909 10.24h-2.105a34.02 34.02 0 0 1-21.333-9.615z"/>
                    </svg>
                </button>
            </div>
        )
    });

    return (
        <div className={cls(style.section, style.tutor_section)}>
            <div className={style.title}>
                <h2>
                    <span className={style.title_bg}>ALL DAY TUTOR</span>
                    <span>全职导师</span>
                </h2>
            </div>
            <div className={style.content}>
                { infoCardList }
            </div>
        </div>
    )
}
