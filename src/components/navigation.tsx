import React, {useEffect, useState} from 'react';
import {cls, imageUrl} from "../utils/utils";

// @ts-ignore
import style from './navigation.scss';
import {useHistory} from "react-router";
import {Routers} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {location, StoreState} from "../utils/redux";

const navTitles = [
    {name: "首页", router: Routers.MAIN},
    {name: "毕业季", router: Routers.GRADUATION_SEASON, tag: "New"},
    {name: "成员", router: Routers.MEMBER},
    {name: "学术活动", router: Routers.ACTIVITY},
    {name: "学术成果", router: Routers.ACHIEVEMENT},
    {name: "桃李天下", router: Routers.GRADUATE}
];

const RoutersMap = {
    [Routers.MAIN]: 0,
    [Routers.GRADUATION_SEASON]: 1,
    [Routers.MEMBER]: 2,
    [Routers.ACTIVITY]: 3,
    [Routers.ACHIEVEMENT]: 4,
    [Routers.GRADUATE]: 5
};


export default function Navigation() {
    const [hidden, setHidden] = useState(false);
    const [whiteStyle, setWhiteStyle] = useState(false);
    const [blackStyle, setBlackStyle] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const currentLocation = useSelector((state: StoreState) => state.currentLocation);

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        let currentHeight = document.body.scrollTop;
        window.addEventListener('scroll', (e) => {
            let height = document.body.scrollTop;
            let {href} = window.location;
            let [_, pathname] = href.split("#");

            pathname = pathname.replace(/\?+/g, "");

            const curPath = pathname;
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

        let {href} = window.location;
        let [_, pathname] = href.split("#");
        const curPath = pathname.replace(/\?+/g, "");

        setActiveIndex(RoutersMap[curPath]);

        if (curPath !== Routers.MAIN && curPath !== Routers.GRADUATION_SEASON) {
            setWhiteStyle(true);
        }

        if (curPath === Routers.MAIN && document.body.scrollTop < document.documentElement.clientHeight / 3) {
            setBlackStyle(false);
            setWhiteStyle(false);
        }

        if (curPath === Routers.GRADUATION_SEASON) {
            setWhiteStyle(false);
            setBlackStyle(true);
        }

    }, [currentLocation]);


    const titlesElem = navTitles.map((item, i) => {
        const handleClick = () => {
            dispatch(location(item.router));
            history.push(item.router);
        };
        const tagElem = !!item.tag && (<span className={style.tag}>{item.tag}</span>)
        return (
            <button type="button" key={i} onClick={handleClick}
                    className={cls(i === activeIndex && style.active)}>
                {item.name}
                {tagElem}
            </button>
        );
    });

    return (
        <div className={cls(style.navigation, hidden && style.hidden, whiteStyle && style.white_style, blackStyle && style.black_style)}>
            <div className={style.left_logo}>
                <div className={style.logo}>
                    <span>
                        {/*<img src={imageUrl("/logo_lab.png")} alt=""/>*/}
                    </span>
                </div>
            </div>
            <div className={style.right_block}>
                {titlesElem}
                <button type="button" className={style.concat_us_btn}>联系我们</button>
            </div>
        </div>
    )
}