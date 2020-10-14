import React from 'react';

//@ts-ignore
import style from "./index.scss";


export default function TutorPage() {

    return (
        <div id="page" className={style.tutor_page}>
            <div className={style.tutor_info_block}>
                <div className={style.left_block}>
                    <h2>王琳 | 教授</h2>
                    <h4>研究领域：宽带无线通信、信息论与编码</h4>
                    <h6>Email: wanglin@xmu.edu.cn</h6>
                </div>
                <div className={style.right_block}>
                    <div className={style.tutor_avatar}>
                        <img src={require("~resources/images/wl.jpeg").default} alt=""/>
                    </div>
                </div>
            </div>

            <div className={style.tutor_introduce_block}>
                <h2>基本介绍:</h2>
                <p>
                    王琳，男，1963年生，博士，厦门大学教授、博士生导师。曾任厦门大学信息科学与技术学院副院长、电子信息国家实验教学示范中心主任、信息与通信工程学科特聘教授，2004年首届教育部新世纪优秀人才入选者，2012年获厦门大学萨本栋讲座教授奖，2016年获厦门大学何宜慈讲座教授奖，2003年1至4月曾在香港城市大学电子工程系访问研究，2013年1月至7月美国加州大学戴维斯分校电子与计算工程系高级研究学者。
                    1984年获重庆师范大学基础数学理学学士学位， 1989年获昆明理工大学应用数学理学硕士学位，2001年获电子科技大学电路与系统专业工学博士学位。
                </p>
                <p>
                    目前主要研究方向：宽带与带限数字通信系统理论及应用（6G、IoT，PLC，VLC，水声通信及体域网传输系统），信息论与编码（信源/信道编译码，联合信源信道编译码，网络编码）。已在SCI收录的IEEE汇刊等重要国际刊物（JCR4以上）发表学术论文81篇，其中1区4篇，2区24篇，IEEE期刊论文57篇，EI收录的主要国际会议上发表学术论文94篇；获IEEE
                    ICCCAS 2005最佳论文奖，被评为IEEE Transaction on Communications 2015年杰出审稿人(＜2%)；授权国家发明专利16项;
                    主持完成多个国家863和国家自然科学基金及多项国际合作项目。多个IEEE国际会议大会主席与程序委员会共同主席。现为中国电子学会理事，IEEE高级会员，电子学报编委，电子与信息学报编委。
                </p>
            </div>
            <div className={style.other_tutor_block}>

            </div>
        </div>
    )
}