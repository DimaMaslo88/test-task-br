import React from 'react';
import style from 'styles/Header.module.css'

export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <h1 className={style.title}>Тестовое задание</h1>
        </div>
    );
};

