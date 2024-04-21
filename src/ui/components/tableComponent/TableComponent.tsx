import React, { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import style from "styles/TableContainer.module.css";
import LinearIndeterminateProgress from "ui/utils/progress/Progress";
import { useSelector } from "react-redux";
import { selectIsLoading, selectTableParams } from "bll/selectors/Selectors";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

export const TableComponent = () => {
  const isLoading = useSelector(selectIsLoading);
  const tableData = useSelector(selectTableParams);
  const [isSorting,setIsSorting] = useState<boolean>(false)
  const sortHandler = ()=>{
    setIsSorting(!isSorting)
  }
  if (isLoading) {
    return <LinearIndeterminateProgress />;
  }
  return (
    <TableContainer component={Paper} className={style.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className={style.tableHeader}>
            <TableCell >За <br />период <FilterListOutlinedIcon className={style.filterIcon} onClick={sortHandler} /></TableCell>
            <TableCell align="right">Год <FilterListOutlinedIcon className={style.filterIcon} /></TableCell>
            <TableCell align="right">Организация <FilterListOutlinedIcon className={style.filterIcon} /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => (
            <TableRow
              key={data.f_pers_young_spec_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${new Date(data.rep_beg_period).toLocaleString("default", { month: "long" })} 
                - ${new Date(data.rep_end_period).toLocaleString("default", { month: "long" })}`}
              </TableCell>
              <TableCell align="right">{`${new Date(data.insert_date).getFullYear()}`}</TableCell>
              <TableCell align="right">Department of Presidential Affairs of the Republic of Belarus</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );

};

