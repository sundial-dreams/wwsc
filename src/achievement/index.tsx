import React, {useState} from "react";
// @ts-ignore
import style from "./index.scss";
import {SubtitleWithNumber} from "../components/title";
import {cls} from "../utils/utils";

function MainSection() {
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


const paperList = [
    {
        name: "Xiangming Cai, Weikai Xu*, Meiyuan Miao, Lin Wang, Design and Performance Analysis of a New M-ary Differential Chaos Shift Keying with Index Modulation, IEEE Transactions on Wireless Communications, accepted for publication, 2019.(SCI, JCR2)",
        url: "",
        image: require("~resources/images/xlk.jpeg").default
    },
    {
        name: "Zhiping Xu, Lin Wang*, Shaohua Hong, Francis Lau, Chiu-Wing  Sham, “Joint Shuffled Scheduling Decoding Algorithm for DP-LDPC Codes-Based JSCC Systems”, IEEE Wireless Communication Letters, accepted for publication, 2019. (SCI, JCR2)",
        url: "",
        image: ""
    },
    {
        name: "Xiangming Cai, Weikai Xu*,  Lin Wang, Fang Xu, “M-ary Code-Shifted Differential Chaos Shift Keying with In-Phase and Quadrature Code Index Modulation”, IET Communications, accepted for publication, 2019. (SCI, JCR4)"
    },
    {
        name: "Fulin Li, Shaohua Hong*, Yujie Gu, Lin Wang, “Joint-Sparse Signal Reconstruction based on Common Support Set Refinement”, IEEE Signal Processing Letters, Vol. 26, No. 9, Sept. 2019. (SCI, JCR3)"
    },
    {
        name: "Qiwang Chen, Lin Wang*, Pingping Chen, Guanrong Chen,“Optimization of Component Elements in Integrated Coding Systems for Green Communications: A Survey”, IEEE Communication Survey & Tutorials, Vol. 21, No. 3, thirdquarter, 2019."
    },
    {
        name: "Qiwang Chen, Lin Wang*, Pingping Chen, Guanrong Chen,“Optimization of Component Elements in Integrated Coding Systems for Green Communications: A Survey”, IEEE Communication Survey & Tutorials, Vol. 21, No. 3, thirdquarter, 2019."
    },
    {
        name: "Qiwang Chen, Lin Wang*, Pingping Chen, Guanrong Chen,“Optimization of Component Elements in Integrated Coding Systems for Green Communications: A Survey”, IEEE Communication Survey & Tutorials, Vol. 21, No. 3, thirdquarter, 2019."
    },
    {
        name: "Qiwang Chen, Lin Wang*, Pingping Chen, Guanrong Chen,“Optimization of Component Elements in Integrated Coding Systems for Green Communications: A Survey”, IEEE Communication Survey & Tutorials, Vol. 21, No. 3, thirdquarter, 2019."
    }
];

function PaperItem(props: { name: string, image?: string, url?: string }) {
    const imgElem = props.image ? (<img src={props.image} alt=""/>) : (<div>A</div>)
    return (
        <div className={style.paper_item}>
            <div className={style.left_elem}>
                {imgElem}
            </div>
            <div className={style.right_elem}>
                {props.name}
            </div>
        </div>
    )
}

function Pagination(props: { number: number, onClick: (index: number) => void }) {
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

function PaperSection() {
    const length = 5;
    const [paperItems, setPaperItems] = useState(paperList.slice(0, length));

    const handlePaginationClick = (index: number) => {
        setPaperItems(paperList.slice(length * index, length * index + length));
    };

    const paperItemsElem = paperItems.map((v, i) => (<PaperItem {...v}/>));

    return (
        <div className={style.paper_section}>
            <div className={style.title_wrapper}>
                <SubtitleWithNumber number="PAPER" subtitle="代表论文" center/>
            </div>
            <div className={style.content}>
                {paperItemsElem}
            </div>
            <div className={style.pagination_wrapper}>
                <Pagination number={Math.round(paperList.length / length)} onClick={handlePaginationClick}/>
            </div>
        </div>
    )
}


export default function AchievementPage() {
    return (
        <div className={style.achievement_page} id="page">
            <MainSection/>
            <PaperSection/>
        </div>
    );
}
