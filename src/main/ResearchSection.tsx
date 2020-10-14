import React from "react";
import {cls} from "../utils/utils";
// @ts-ignore
import style from "./index.scss";

export default function ResearchSection() {
    return (
        <div className={cls(style.section, style.research_section)}>
            <div className={style.title}>
                <h2>
                    <span className={style.title_bg}>RESEARCH AREA</span>
                    <span>研究领域</span>
                </h2>
            </div>
            <div className={style.section_content}>
                <div className={style.section_one}>
                    <div className={style.section_one_content}>
                        <div className={style.section_one_title}>
                            <h3>以编码调制技术推进为核心，拉动其在三个领域的应用研究</h3>
                        </div>
                        <div className={style.section_one_text}>
                            <p>- 推动物联网（IoT/6G/B6G）链接芯片算法设计，探索其在现代垂直行业中的应用如:医疗（个域网）、智能制造业；</p>
                            <p>- 推动电力线通信核心芯片算法设计，促进PLC芯片产业发展；</p>
                            <p>- 基于混沌调制的水声通信新型传输理论；</p>
                            <p>- 人工智能（AI artificial intelligence，AI）在上述领域的应用。</p>
                        </div>
                    </div>
                    <div className={style.section_one_image_block}>
                        <div className={style.section_one_image}/>
                    </div>
                </div>
                <div className={style.section_two}>
                    <div className={style.section_two_image_block}>
                        <div className={style.section_two_image}/>
                    </div>

                    <div className={style.section_two_content}>
                        <div className={style.section_two_title}>
                            <h3>研究未来B6G可能的技术：单芯片数字信号处理模块设计</h3>
                        </div>
                        <div className={style.section_two_text}>
                            <p>- 奠定低成本、低功耗、低时延算法设计新的设计方法学基础。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
