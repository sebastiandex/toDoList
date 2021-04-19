import React from 'react-dom';
import Calendar from "../Components/Calendar";
import ItemsLayout from "./ItemsLayout";
import style from './coreLayout.module.scss'

const CoreLayout = () => {
    return (
        <div className={style.main}>
        <Calendar />
        <ItemsLayout />
        </div>
    )
}

export default CoreLayout;
