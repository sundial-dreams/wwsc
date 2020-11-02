import {cls, imageUrl} from "../utils/utils";
import React from "react";
// @ts-ignore
import style from "./index.scss";

export default function HistorySection() {

    return (
        <div className={cls(style.section, style.history_section)}>
            <div className={style.title}>
                <h2>
                    <span className={style.title_bg}>HISTORY OF LAB</span>
                    <span>实验室发展历程</span>
                </h2>
                <p>混沌调制领域的领导者，原模图LDPC码领域的驱动者</p>
            </div>
            <div className={style.section_content}>
                <div className={style.left_block}>
                    <p>2001年获国家863项目最先开启国内LDPC码在3G系统中的应用基础研究；</p>
                    <p>
                        历时3G-5G信道编译码的优化设计与实现研究，首次阐明非标准信道下结构化LDPC码的优化设计原则，发展了分离系统信道编译码优化设计方法学；
                        开启6G具有低功耗低成本低时延物理层传输技术研究，在联合信源信道编译码领域发展出较完整的优化设计方法学理论；
                    </p>
                    <p>
                        在信号设计领域，发展出基于混沌调制解调的非相干传输理论体系，并寻找到适用于该信号传输的应用场景（超宽带、水声环境、电力线通信）；
                        针对平稳信源和可变环境建立编码与混沌调制互动的设计方法学。
                    </p>
                    <p>
                        右图反映了实验室研究对象的变化，从分离设计到整合型设计或联合设计成为实验室研究重点，试图以单芯片替代多个芯片的功能，实现新型通信系统的低成本、低功耗、低时延特点。这一特征将被极大应用于工业互联网的构架中，成为物联网链接芯片技术的核心。
                    </p>
                </div>
                <div className={style.right_block}>
                    <div className={style.image_wrapper}>
                        <img className="lazyload blur-up" src={imageUrl("/framework1.png")} alt=""/>
                        <img className="lazyload blur-up" src={imageUrl("/framework2.png")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
