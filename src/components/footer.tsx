import React from 'react';
// @ts-ignore
import style from './footer.scss';

export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.left_block}>
                <div className={style.logo_wrapper}>
                    <h3>宽带无线通信实验室</h3>
                    <p>2002-2020 厦门大学信息与通信工程系 科研二 514</p>
                    <p>design and development by dengpengfei</p>
                </div>
            </div>
            <div className={style.middle_block}>
                <p>联系我们</p>
                <button>Email: dengpengfei@xmu.edu.stu.cn</button>
                <button>问题反馈</button>
            </div>
            <div className={style.right_block}>
                <p>关注我们，了解实时信息</p>
                <div className={style.follow_us_channel}>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}