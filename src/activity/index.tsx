import React from "react";
import Title, {SubtitleWithNumber, TitlePosition} from "../components/title";

//@ts-ignore
import style from "./index.scss";


const photoList = [
    {photo: require("~resources/images/activity/a.jpg").default, text: "2013年王琳教授与蔡少棠教授在UC berkeley合影"},
    {photo: require("~resources/images/activity/b.jpg").default, text: "2013年王琳教授与蔡少棠教授在UC berkeley合影"},
    {photo: require("~resources/images/activity/c.jpg").default, text: "2013年王琳教授与蔡少棠教授在UC berkeley合影"},
    {photo: require("~resources/images/activity/c.jpg").default, text: "2013年王琳教授与蔡少棠教授在UC berkeley合影"},
    {photo: require("~resources/images/activity/b.jpg").default, text: "2013年王琳教授与蔡少棠教授在UC berkeley合影"},
    {photo: require("~resources/images/activity/a.jpg").default, text: "2013年王琳教授与蔡少棠教授在UC berkeley合影"},
];

function PhotoItem(props: { photo: string, text: string }) {
    return (
        <div className={style.photo_item}>
            <div className={style.photo_wrapper}>
                <img src={props.photo} alt=""/>
            </div>
            <div className={style.text}>
                <h4>
                    {props.text}
                </h4>
            </div>
        </div>
    )
}

function PhotoCard(props: { photoItems: Array<React.ReactElement> }) {
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

const activityList = [
    {name: "浙江师范大学数学学院邀请王琳教授演讲", year: "2019.10.31"},
    {name: "王琳教授于南京邮电大学全国混沌保密通信学术联合会上作大会报告", year: "2019.10.19"},
    {name: "长安大学信息工程学院邀请王琳教授演讲", year: "2019.10.10"},
    {name: "中山大学电信学院邀请王琳教授演讲", year: "2018.11.23"},
    {name: "浙江大学电信学院邀请王琳教授演讲", year: "2018.11.3"},
    {name: "华南理工大学电信学院邀请王琳教授、徐位凯副教授演讲", year: "2018.7.9"},
    {name: "广东工业大学信息工程学院邀请王琳教授演讲", year: "2018.7.6"},
    {name: "华侨大学数学学院邀请王琳教授演讲", year: "2018.6.29"}

];

function ActivityItem(props: { name: string, year: string }) {
    return (
        <div className={style.activity_item}>
            <span className={style.year}>{props.year}</span>
            <p>{props.name}</p>
        </div>
    );
}

function MainSection() {

    const photoItems = photoList.map((v, i) => (<PhotoItem {...v} />));

    const activityItems = activityList.map((v, i) => (<ActivityItem {...v} />));

    return (
        <div className={style.main_section}>
            <div className={style.left_block}>
                <PhotoCard photoItems={photoItems}/>
            </div>
            <div className={style.right_block}>
                <div className={style.activity_title}>
                    <SubtitleWithNumber number="01" subtitle="学术演讲与访问"/>
                </div>
                <div className={style.activity_item_wrapper}>
                    {activityItems}
                    <button className={style.more_btn}>+ more</button>
                </div>
            </div>
        </div>
    )
}

function SecondSection() {
    const photoItems = photoList.slice(2).map((v, i) => (<PhotoItem {...v} />));

    const activityItems = activityList.map((v, i) => (<ActivityItem {...v} />));
    return (
        <div className={style.second_section}>
            <div className={style.left_block}>
                <div className={style.activity_title}>
                    <SubtitleWithNumber number="02" subtitle="产学研访问研讨"/>
                </div>
                <div className={style.activity_item_wrapper}>
                    {activityItems}
                    <button className={style.more_btn}>+ more</button>
                </div>
            </div>
            <div className={style.right_block}>
                <PhotoCard photoItems={photoItems}/>
            </div>
        </div>
    )
}

export default function ActivityPage() {
    return (
        <div id="page" className={style.activity_page}>
            <MainSection/>
            <SecondSection/>
        </div>
    );
}