import React, { useEffect } from "react";
import { useAppDispatch } from "bll/store";
import { SetFormForYoungSpec, SetFormLineForYoungSpec } from "dal/thunk/ContentThunk";
import { useSelector } from "react-redux";
import { selectFormParams } from "bll/selectors/Selectors";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import style from "styles/TableContainer.module.css";


export const FormComponent = () => {
  const dispatch = useAppDispatch();
  const formdata = useSelector(selectFormParams);
  useEffect(()=>{
    dispatch(SetFormLineForYoungSpec())
  })
  useEffect(() => {
    dispatch(SetFormForYoungSpec());
  }, []);
  return (
    <TableContainer component={Paper} className={style.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className={style.tableHeader}>
            <TableCell>Наименование Показателя
            </TableCell>
            <TableCell align="right">Общее количество молодых специалистов
            </TableCell>
            <TableCell align="right">Категория,источник приема на работу
              <Grid container>
                <Grid item xs={4}>
                  <TableCell>Целевое</TableCell>
                </Grid>
                <Grid item xs={4}>
                  <TableCell>Распределение</TableCell>
                </Grid>

              </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formdata.map((data) => (
            <TableRow
              key={data.f_pers_young_spec_line_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}

            >
              <TableCell component="th" scope="row" > </TableCell>
              <TableCell align="right" />
              <TableCell align="right" />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

