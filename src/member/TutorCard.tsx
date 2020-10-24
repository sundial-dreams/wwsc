import React from "react";
import {cls, stringify} from "../utils/utils";
import {useHistory} from "react-router";
// @ts-ignore
import style from "./index.scss";
import {Routers} from "../utils/constants";

export default function TutorCard(props: { id: string, avatar: string, name: string, position: string, field: string, intro?: string }): React.ReactElement {
    const history = useHistory();
    const handleClick = () => {
        history.push({pathname: Routers.TUTOR, search: stringify({tutor_id: props.id})});
    };
    return (
        <div className={style.tutor_card} onClick={handleClick}>
            <div className={style.avatar_block}>
                <img data-src={props.avatar} className="lazyload blur-up" alt=""/>
            </div>
            <div className={style.intro_block}>
                <h3>{props.name}<span> | {props.position}</span></h3>
                <h4>研究方向: <span>{props.field}</span></h4>
                <p>{props?.intro}</p>
            </div>
        </div>
    )
}
