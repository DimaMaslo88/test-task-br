import React, { useEffect } from "react";
import style from 'styles/Header.module.css'
import { useAppDispatch } from "bll/store";
import { SetReviews } from "dal/thunk/ReviewsThunk";

export const Header = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(SetReviews())

  },[])
    return (
        <div className={style.headerContainer}>
            <h1 className={style.title}>Тестовое задание</h1>
        </div>
    );
};

