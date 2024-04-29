import React, { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import style from "styles/TableContainer.module.css";
import LinearIndeterminateProgress from "ui/utils/progress/Progress";
import { useSelector } from "react-redux";
import { selectCurrentPage, selectIsLoading, selectTableParams } from "bll/selectors/Selectors";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { SortValueType } from "types/types";
import PaginationControlled from "ui/components/pagination/contentPagination";

export const TableComponent = () => {
  const isLoading = useSelector(selectIsLoading);
  const tableData = useSelector(selectTableParams);
  const [ascendingYear, setAscendingYear] = useState<boolean>(false);
  const [ascendingPeriod, setAscendingPeriod] = useState<boolean>(false);
  const [sort, setSort] = useState<SortValueType>();
  const [selected, setSelected] = useState<number|null>(null);
  const currentPage = useSelector(selectCurrentPage)
  const totalItems = tableData.length
  const elementOnPage = 5
  const lastPostIndex = currentPage * elementOnPage
  const firstPostIndex = lastPostIndex - elementOnPage
  const currentTableData = tableData.slice(firstPostIndex,lastPostIndex)
  const sortingTableByYear = () => {
    setSort("year");
    setAscendingYear(!ascendingYear);
  };
  const sortingTableByPeriod = () => {
    setSort("period");
    setAscendingPeriod(!ascendingPeriod);
  };
  let newTableData = currentTableData;
  if (sort === "year") {
    newTableData = [...currentTableData].sort((a, b) => {
      if (a.insert_date < b.insert_date) {
        return ascendingYear ? -1 : 1;
      }
      if (a.insert_date > b.insert_date) {
        return ascendingYear ? 1 : -1;
      }
      return 0;
    });
  }
  if (sort === "period") {
    newTableData = [...currentTableData].sort((a, b) => {
      if (a.rep_beg_period < b.rep_end_period) {
        return ascendingPeriod ? -1 : 1;
      }
      if (a.rep_beg_period > b.rep_end_period) {
        return ascendingPeriod ? 1 : -1;
      }
      return 0;
    });
  }
  // const sortingTable = [...tableData].sort((a, b) => {
  //   const [aMonth1, aMonth2] = a.rep_beg_period.split("-");
  //   const [bMonth1, bMonth2] = b.rep_end_period.split("-");
  //
  //   if (aMonth1 !== bMonth1) {
  //     return aMonth1.localeCompare(bMonth1);
  //   }
  //   return aMonth2.localeCompare(bMonth2);
  //
  // });
  const onClickHandler = (id:number|null) => {
    setSelected(id);
  };

  if (isLoading) {
    return <LinearIndeterminateProgress />;
  }

  return (
    <div className={style.tableContainer}>
    <TableContainer component={Paper} className={style.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className={style.tableHeader}>
            <TableCell>За <br />период <FilterListOutlinedIcon className={style.filterIcon}
                                                               onClick={sortingTableByPeriod}
            />
            </TableCell>
            <TableCell align="right">Год <FilterListOutlinedIcon className={style.filterIcon}
                                                                 onClick={sortingTableByYear} />
            </TableCell>
            <TableCell align="right">Организация <FilterListOutlinedIcon className={style.filterIcon}
            />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newTableData.map((data) => (
            <TableRow
              onClick={()=>onClickHandler(data.f_pers_young_spec_id)}
              key={data.f_pers_young_spec_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={selected === data.f_pers_young_spec_id ? style.tableRowActive :style.tableRow}
            >
              <TableCell component="th" scope="row">
                {`${new Date(data.rep_beg_period).toLocaleString("default", { month: "long" })} 
                - ${new Date(data.rep_end_period).toLocaleString("default", { month: "long" })}`}
              </TableCell>
              <TableCell align="right">{`${new Date(data.insert_date).getFullYear()}`}</TableCell>
              <TableCell align="right">{data.org_employee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <PaginationControlled items={totalItems} elementOnPage={elementOnPage} currentPage={currentPage}/>
    </div>
  );


};

