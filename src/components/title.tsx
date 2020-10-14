import React from "react";

//@ts-ignore
import style from "./title.scss";
import {cls} from "../utils/utils";

export enum TitlePosition {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center"
}

export default function Title(props: { mainTitle: string, subtitle: string, position: TitlePosition }) {

    return (
        <div className={style.title}>
            <h2>
                <span className={style.subtitle}>{props.subtitle}</span>
                <span>{props.mainTitle}</span>
            </h2>
        </div>
    )
}


export function SubtitleWithNumber(props: { number: string, subtitle: string, center?: boolean }) {
    return (
        <div className={cls(style.subtitle_with_number, props.center && style.center)}>
            <h3>
                <span className={style.number}>{props.number}</span>
                <span className={style.subtitle}> {props.subtitle} </span>
            </h3>
        </div>
    )
}