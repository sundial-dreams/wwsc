import React from "react";
import {SubtitleWithNumber} from "../components/title";

// @ts-ignore
import style from "./index.scss";

export default function MainSection() {
    return (
        <div className={style.main_section}>
            <div className={style.left_block}>
                <div className={style.title_wrapper}>
                    <SubtitleWithNumber number="BOOKS" subtitle="著作"/>
                </div>
                <div className={style.content}>
                    <h3>史国治、洪少华、陈抗生，基于XILINX FPGA的OFDM通信系统基带设计，浙江大学出版社，2009年3月</h3>
                    <h3>王琳、徐位凯，高效信道编译码技术及其应用，人民邮电出版社，2007年4月（863通信高技术丛书）</h3>
                </div>
            </div>
            <div className={style.right_block}>
                <div className={style.books_image_wrapper}>
                    <img src={require("~resources/images/books.jpg").default} alt=""/>
                </div>
            </div>
        </div>
    )
}
