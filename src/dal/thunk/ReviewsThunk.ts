import { AppThunkType } from "bll/store";
import { ContentApi } from "dal/api/Content-api";
import {  setTableData } from "bll/actions/reviews-actions";

export const SetTableData =():AppThunkType=>async(dispatch)=>{
  try{
    const res = await ContentApi.getHeaderData()
   // dispatch(setTableData(res.data))
    console.log(res.data)
  }catch (err){
    console.log(err)
  }

}
