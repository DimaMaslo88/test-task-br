import { AppThunkType } from "bll/store";
import { ContentApi } from "dal/api/Content-api";
import { setTableData } from "bll/actions/table-actions";
import { setIsLoading } from "bll/actions/appReducer-actions";



export const SetTableDataThunk =():AppThunkType=>async(dispatch)=>{
dispatch(setIsLoading(true))
  try{
    const res = await ContentApi.getHeaderData()
    dispatch(setTableData(res.data))
    console.log(res.data)
  }catch (err){
    console.log(err)
  }finally {
    dispatch(setIsLoading(false))
  }

}
