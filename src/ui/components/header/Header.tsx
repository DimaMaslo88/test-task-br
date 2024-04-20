import React, { useEffect } from "react";
import style from 'styles/Header.module.css'
import { useAppDispatch } from "bll/store";


export const Header = () => {
  const dispatch = useAppDispatch()



    return (
        <div className={style.headerContainer}>
hello
        </div>
    );
};

