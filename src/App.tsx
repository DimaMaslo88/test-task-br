import React, { useEffect } from "react";
import { Header } from "ui/components/header/Header";
import style from "styles/App.module.css";
import { useAppDispatch } from "bll/store";
import { SetTableData } from "dal/thunk/ReviewsThunk";
import { Pages } from "ui/pages/Pages";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(SetTableData());
  }, []);
  return (
    <div>
      <Header />
      <div className={style.tableComponentContainer}>
        <Pages/>
      </div>

    </div>
  );
}

export default App;
