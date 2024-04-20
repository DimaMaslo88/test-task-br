import React, { useEffect } from "react";
import style from "styles/Header.module.css";
import { useAppDispatch } from "bll/store";
import ButtonHeader from "ui/utils/button/Button";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FilterListOffOutlinedIcon from '@mui/icons-material/FilterListOffOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';

export const Header = () => {
  const dispatch = useAppDispatch();


  return (
    <div className={style.headerContainer}>
      <AutorenewIcon className={style.icon}/>
      <FilterListOffOutlinedIcon className={style.icon}/>
      <ButtonHeader title="Добавить" />
      <ButtonHeader title="Просмотреть" />
      <ButtonHeader title="Редактировать" />
      <DehazeOutlinedIcon className={style.icon} />
    </div>
  );
};

