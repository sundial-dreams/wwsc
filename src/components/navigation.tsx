import React, {useEffect, useState} from 'react';
import {cls} from "../utils/utils";

// @ts-ignore
import style from './navigation.scss';
import {useHistory} from "react-router";
import {Routers} from "../utils/constants";

const navTitles = [
    {name: "首页", router: Routers.MAIN},
    {name: "成员", router: Routers.MEMBER},
    {name: "学术活动", router: Routers.ACTIVITY},
    {name: "学术成果", router: Routers.ACHIEVEMENT},
    {name: "桃李天下", router: ""}
];


export default function Navigation() {
    const [hidden, setHidden] = useState(false);
    const [whiteStyle, setWhiteStyle] = useState(false);


    const history = useHistory();

    useEffect(() => {
        let currentHeight = document.body.scrollTop;
        window.addEventListener('scroll', (e) => {
            let height = document.body.scrollTop;
            if (height > document.documentElement.clientHeight / 2) {
                setWhiteStyle(true);
            } else {
                setWhiteStyle(false);
            }
            if (currentHeight < height) {
                setHidden(false);
                currentHeight = height;
                return
            }
            setHidden(false);
        });
    });

    const titlesElem = navTitles.map((item, i) => (
        <button type="button" key={i} onClick={() => history.push(item.router)}
                className={cls(i === 0 && style.active)}>{item.name}</button>
    ));
    return (
        <div className={cls(style.navigation, hidden && style.hidden, whiteStyle && style.white_style)}>
            <div className={style.left_logo}>

            </div>
            <div className={style.right_block}>
                {titlesElem}
                <button type="button" className={style.concat_us_btn}>联系我们</button>
            </div>
        </div>
    )
}