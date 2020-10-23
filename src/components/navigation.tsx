import React, {useEffect, useState} from 'react';
import {cls} from "../utils/utils";

// @ts-ignore
import style from './navigation.scss';
import {useHistory} from "react-router";
import {Routers} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {location, StoreState} from "../utils/redux";

const navTitles = [
    {name: "首页", router: Routers.MAIN},
    {name: "成员", router: Routers.MEMBER},
    {name: "学术活动", router: Routers.ACTIVITY},
    {name: "学术成果", router: Routers.ACHIEVEMENT},
    {name: "桃李天下", router: Routers.GRADUATE}
];

const RoutersMap = {
    "": 0,
    [Routers.MAIN]: 0,
    [Routers.MEMBER]: 1,
    [Routers.ACTIVITY]: 2,
    [Routers.ACHIEVEMENT]: 3,
    [Routers.GRADUATE]: 4
};


export default function Navigation() {
    const [hidden, setHidden] = useState(false);
    const [whiteStyle, setWhiteStyle] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const currentLocation = useSelector((state: StoreState) => state.currentLocation);

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        let currentHeight = document.body.scrollTop;
        window.addEventListener('scroll', (e) => {
            let height = document.body.scrollTop;
            const curPath = window.location.pathname;
            if (curPath !== "/") return;
            if (height > document.documentElement.clientHeight / 3) {
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

    useEffect(() => {
        const curPath = window.location.pathname;
        // console.log("currentLocation = ", currentLocation);
        if (curPath !== Routers.MAIN) {
            setWhiteStyle(true);
        }
        if (curPath === Routers.MAIN && document.body.scrollTop < document.documentElement.clientHeight / 3) {
            setWhiteStyle(false);
        }
        setActiveIndex(RoutersMap[curPath]);
    }, [currentLocation]);


    const titlesElem = navTitles.map((item, i) => {
        const handleClick = () => {
            dispatch(location(item.router));
            history.push(item.router);
        };
        return (
            <button type="button" key={i} onClick={handleClick}
                    className={cls(i === activeIndex && style.active)}>{item.name}</button>
        );
    });

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