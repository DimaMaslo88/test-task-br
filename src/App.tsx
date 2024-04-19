import React from 'react';
import './App.css';
import {Header} from "ui/components/header/Header";
import { TableComponent } from "ui/components/tableComponent/TableComponent";


function App() {
    return (
        <div>
            <Header/>
          <TableComponent/>
        </div>
    );
}

export default App;
