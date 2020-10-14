import React from "react";
import {cls} from "../utils/utils";
// @ts-ignore
import style from "./index.scss";

export default function MainSection() {
    return (
        <div className={cls(style.section, style.main_section)}>
            <div className={style.background}>
                <img src={require("~resources/images/xiamen_university.jpeg").default} alt=""/>
            </div>
            <div className={style.mask}>
                <h2>宽带无线通信系统实验室</h2>
                <p>
                    Lab of Wide-band Wireless Communication Systems (WWCS)
                </p>
                <div className={style.arrow_block}>
                    <button className={style.arrow_btn}>
                        <svg className={style.arrow_down_svg_icon} viewBox="0 0 1024 1024" width="200" height="200">
                            <path d="M486.969 1014.101l-.683-.625-306.745-315.279a34.133 34.133 0 0 1 0-47.616l3.015-3.072a34.133 34.133 0 0 1 48.242-.682l.683.682 238.478 245.078-.057-858.454A34.133 34.133 0 0 1 504.036 0h3.3a34.133 34.133 0 0 1 34.132 34.133v870.97l250.653-257.594a34.133 34.133 0 0 1 48.242-.682l.682.682 3.015 3.072a34.133 34.133 0 0 1 0 47.616l-306.744 315.279a34.076 34.076 0 0 1-26.909 10.24h-2.105a34.02 34.02 0 0 1-21.333-9.615z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
