import React from "react";
// @ts-ignore
import style from "./index.scss";

export function PhotoItem(props: { photo: string, text: string }) {
    return (
        <div className={style.photo_item}>
            <div className={style.photo_wrapper}>
                <img data-src={props.photo} className="lazyload blur-up" alt=""/>
            </div>
            <div className={style.text}>
                <h4>
                    {props.text}
                </h4>
            </div>
        </div>
    )
}

export function PhotoCard(props: { photoItems: Array<React.ReactElement> }) {
    return (
        <div className={style.activity_photo_card_wrapper}>
            <button className={style.left_btn}> +</button>
            <button className={style.right_btn}> -</button>
            <div className={style.activity_photo_card}>
                <div className={style.photo_card_views}>
                    {props.photoItems}
                </div>
            </div>
        </div>
    )

}

export function ActivityItem(props: { name: string, year: string }) {
    return (
        <div className={style.activity_item}>
            <span className={style.year}>{props.year}</span>
            <p>{props.name}</p>
        </div>
    );
}


export function ProfessorInfoCard(props: { cancel: () => void, avatar: string, name: string, email: string, intro: string, field: string, url: string }) {
    return (
        <div className={style.professor_info_card}>
            <div className={style.left_block}>
                <div className={style.avatar_wrapper}>
                    <div className={style.avatar}>
                        <img data-src={props.avatar} className="lazyload blur-up" alt=""/>
                    </div>
                </div>
                <div className={style.info}>
                    <div>
                        {props.name}
                    </div>
                    <div>
                        <span>合作领域: </span> {props.field}
                    </div>
                    <div>
                        <span>Email: </span> {props.email}
                    </div>
                    <div>主页: <a href={props.url}>{props.name + "教授的主页"}</a></div>
                </div>
            </div>
            <div className={style.right_block}>
                <p>
                    {props.intro}
                </p>
                <button className={style.close_btn} onClick={props.cancel}>+</button>
            </div>
        </div>
    )
}



