import React, {useState} from "react";
import {cls} from "../utils/utils";
// @ts-ignore
import style from "./pagination.scss";

export default function Pagination(props: { number: number, onClick: (index: number) => void }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const btnItems = Array.from({length: props.number}, (v, i) => {
        const handleClick = () => {
            setActiveIndex(i);
            props.onClick(i);
        }
        return <button className={cls(activeIndex === i && style.active)} onClick={handleClick}>{i + 1}</button>;
    });
    return (
        <div className={style.pagination}>
            {btnItems}
        </div>
    )
}