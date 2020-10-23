import React, { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import {cls} from "../utils/utils";

// @ts-ignore
import style from "./modal.scss";

export default function modal(contentFunction: (cancel: () => void) => ReactNode) {
    const div = document.createElement('div');
    div.className = style.__layer__wrapper;
    const page = document.getElementById('page');
    page?.appendChild(div);

    function destroy() {
        div.parentNode?.removeChild(div);
    }

    function Layer(props: {}) {
        const [hidden, setHidden] = useState(false);

        const onCancel = () => {
            setHidden(true);
            setTimeout(() => destroy(), 700);
        };

        return (
            <div className={cls(style.__layer, hidden ? style.hidden : style.show)}>
                {contentFunction(onCancel)}
            </div>
        );
    }

    ReactDOM.render(<Layer/>, div);
}


export function StudentInfo() {

}