import React from 'react';
import {imageUrl} from "../utils/utils";

import {Block, ClassButton, VideoCard} from "./components";
import modal from "../components/modal";
// @ts-ignore
import style from "./index.scss";

const size = 176;
const size_half = Math.floor(size / 2);

export default function Section2018() {
    const handleVideoBtnClick = () => {
        modal((cancel) => (<VideoCard cancel={cancel}/>))
    };
    return (
        <div className={style.section_2018}>
            <div className={style.class_button_wrapper}>
                <ClassButton text={"2018届"} color={"#1B1B1D"}/>
            </div>
            <div className={style.left_block}>
                <div className={style.image_wrapper}>
                    <img data-src={imageUrl("/graduation_season/graduation.png")} className="lazyload blur-up" alt=""/>
                </div>
                <div className={style.title}>
                    <h2>毕业啦，祝2018届师兄师姐毕业快乐！</h2>
                </div>
                <div className={style.video_block}>
                    <button onClick={handleVideoBtnClick}>
                        VIDEO
                        <svg className={style.arrow_down_svg_icon} viewBox="0 0 1024 1024" width="200" height="200">
                            <path
                                d="M486.969 1014.101l-.683-.625-306.745-315.279a34.133 34.133 0 0 1 0-47.616l3.015-3.072a34.133 34.133 0 0 1 48.242-.682l.683.682 238.478 245.078-.057-858.454A34.133 34.133 0 0 1 504.036 0h3.3a34.133 34.133 0 0 1 34.132 34.133v870.97l250.653-257.594a34.133 34.133 0 0 1 48.242-.682l.682.682 3.015 3.072a34.133 34.133 0 0 1 0 47.616l-306.744 315.279a34.076 34.076 0 0 1-26.909 10.24h-2.105a34.02 34.02 0 0 1-21.333-9.615z"/>
                        </svg>
                    </button>
                    <span>
                        这里，有个有趣的视频哦
                    </span>
                </div>
            </div>
            <div className={style.right_block}>
                <div className={style.block_list}>
                    <Block radius={[size_half, 0, 0, 0]} size={[size, size]} background={"#C4D5F5"}/>
                    <Block radius={[0, 0, size_half, 0]} size={[size, size]} background={"#F9EBA6"}/>
                    <Block radius={[size_half, 0, 0, 0]} size={[size, size]} background={"#1B1B1D"}
                           text={": 祝前程似锦，工作顺利"}/>
                    <Block radius={[size_half, 0, size_half, 0]} size={[size * 2, size]}
                           image={imageUrl("/graduation_season/1.jpg")}/>
                    <Block radius={[0, 0, 0, size_half]} size={[size, size]} background={"#F9EBA6"}/>
                    <Block radius={[size_half, 0, 0, 0]} size={[size, size]} background={"#1B1B1D"}
                           text={": 祝一路顺风，好事连连"}/>
                    <Block radius={[size_half, size_half, size_half, size_half]} size={[size, size]}
                           image={imageUrl("/graduation_season/4.jpg")}/>
                    <Block radius={[size_half, 0, 0, 0]} size={[size, size]}
                           image={imageUrl("/graduation_season/2.jpg")}/>
                    <Block radius={[size_half, 0, size_half, 0]} size={[size * 2, size]}
                           image={imageUrl("/graduation_season/3.jpg")}/>
                    <Block radius={[0, size_half, 0, size_half]} size={[size, size]} background={"#C4D5F5"}/>
                </div>
            </div>
        </div>
    )
}
