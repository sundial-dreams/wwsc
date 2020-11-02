import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {cls, imageUrl} from "../utils/utils";
import {Routers} from "../utils/constants";
import {StoreState} from "../utils/redux";
// @ts-ignore
import style from './banner.scss';

export default function Banner() {
    const date = Date.now();
    if (date > new Date(2021, 7, 1).getTime()) {
        return null;
    }
    const [hide, setHide] = useState(true);
    const [hideForever, setHideForever] = useState(false);
    const currentLocation = useSelector((state: StoreState) => state.currentLocation);
    const url = "https://ismict2021.net/index.html";
    const handleBannerClick = () => {
        window.location.href = url;
    };
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setHide(true);
        setHideForever(true);
    };

    useEffect(() => {
        let currentHeight = document.body.scrollTop;
        window.addEventListener('scroll', (e) => {
            if (hideForever) return;
            let height = currentHeight = document.body.scrollTop;
            let {href} = window.location;
            let [, pathname] = href.split("#");

            pathname = pathname.replace(/\?+/g, "");

            const curPath = pathname;

            if (curPath !== "/") return;
            if (height > document.documentElement.clientHeight / 2) {
                setHide(false);
                currentHeight = height;
                return
            }
            setHide(true);
        });
    }, [hideForever]);

    useEffect(() => {

        let {href} = window.location;
        let [, pathname] = href.split("#");
        const curPath = pathname.replace(/\?+/g, "");

        if (curPath !== Routers.MAIN) {
            setHide(true);
        }
    }, [currentLocation]);


    return (
        <div className={cls(style.banner, (hide || hideForever)&& style.hide)} onClick={handleBannerClick}>
            <img className="lazyload blur-up" data-src={imageUrl("/banner.png")} alt=""/>
            <div className={style.main_title}>
                <h3>15th International Symposium on Medical Information and Communication Technology</h3>
                <h3>(ISMICT2021) | 14-16 April 2021 | Xiamen, China</h3>
            </div>
            <div className={style.dates}>
                <h5>Paper submission deadline: <span>31, Dec, 2020</span></h5>
                <h5>Acceptance notification: <span>15, Feb, 2021</span></h5>
                <h5>Camera-ready paper due: <span>1, Mar, 2021</span></h5>
            </div>
            <button className={style.close_btn} onClick={handleClose}>+</button>
        </div>
    )
}