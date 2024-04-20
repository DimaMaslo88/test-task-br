import React, { useEffect } from "react";
import { Header } from "ui/components/header/Header";
import style from "styles/App.module.css";
import { useAppDispatch } from "bll/store";
import { Pages } from "ui/pages/Pages";
import { SetTableDataThunk } from "dal/thunk/ContentThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(SetTableDataThunk());
  }, []);

  return (
    <div>
      <Header />
      <div className={style.tableComponentContainer}>
        <Pages />
      </div>

    </div>
  );
}

export default App;
