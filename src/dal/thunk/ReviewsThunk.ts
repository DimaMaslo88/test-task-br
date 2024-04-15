import { AppThunkType } from "bll/store";
import { ContentApi } from "dal/api/Content-api";

export const SetReviews =():AppThunkType=>async(dispatch)=>{
  try{
    const res = await ContentApi.getReviews()
  }catch (err){
    console.log(err)
  }

}
