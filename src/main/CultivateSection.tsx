import React from "react";
import {cls} from "../utils/utils";

// @ts-ignore
import style from "./index.scss";

export default function CultivateSection() {
    return (
        <div className={cls(style.section, style.cultivate_section)}>
            <div className={style.title}>
                <h2>
                    <span className={style.title_bg}>CULTIVATE METHOD</span>
                    <span>培养方案</span>
                </h2>
                <p>推动通信理论的变革，尤其物理层传输理论的变革，借助在编码与调制领域的创新能力，推动数字通信系统核心芯片算法设计与实线的发展与应用，成为工业互联网连接芯片算法设计的重要驱动力量，成为多种环境下宽带与带限数字通信系统算法设计的领导者。</p>
            </div>
            <div className={style.content}>
                <div className={style.section_image}>
                    <div className={style.image}>
                        <img src={require("~resources/images/thinking.jpg").default} alt=""/>
                    </div>
                </div>
                <div className={style.section_list}>
                    <h3>博士层面</h3>
                    <p>面向6G&B6G的数字通信系统物理层算法驱动者。</p>
                    <h3>硕士层面</h3>
                    <p>面向6G，尤其工业互联网链接芯片（数字信号处理与基带）算法工程师和其数字实现（FPGA/软件无线电）的软件工程师。</p>
                </div>
            </div>
        </div>
    )
}
