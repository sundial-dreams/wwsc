import React from 'react';

// @ts-ignore
import style from "./index.scss";
import {imageUrl} from "../utils/utils";

interface IBlock {
    radius: [number, number, number, number],
    size: [number, number],
    background?: string,
    image?: string,
    text?: string
}

export function Block(props: IBlock = {radius: [0, 0, 0, 0], size: [0, 0]}) {
    const blockStyle = {
        width: props.size[0],
        height: props.size[1],
        borderTopLeftRadius: props.radius[0],
        borderTopRightRadius: props.radius[1],
        borderBottomRightRadius: props.radius[2],
        borderBottomLeftRadius: props.radius[3],
        background: props.background,
    };
    const imageElem = props.image && (
        <div className={style.img_wrapper}>
            <img data-src={props.image} className="lazyload blur-up" alt=""/>
        </div>
    );

    const textElem = props.text && (
        <div className={style.text}>
            {props.text}
        </div>
    )

    return (
        <div className={style.block} style={blockStyle}>
            {imageElem}
            {textElem}
        </div>
    )
}


export function ClassButton({text, color}: { text: string, color: string }) {
    return (
        <button className={style.class_button}>
            <span>{text}</span>
        </button>
    )
}

export function VideoCard({cancel}: { cancel: () => void }) {
    return (
        <div className={style.video_card}>
            <button onClick={cancel}>+</button>
            <div className={style.video_wrapper}>
                <video src={imageUrl("/graduation_season/video.MOV")} controls width={"700px"}/>
            </div>
        </div>
    )
}