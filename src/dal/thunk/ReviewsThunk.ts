import { AppThunkType } from "bll/store";
import { ContentApi } from "dal/api/Content-api";
import { setReviews } from "bll/actions/reviews-actions";

export const SetReviews =():AppThunkType=>async(dispatch)=>{
  try{
    const res = await ContentApi.getReviews()
    dispatch(setReviews(res.data))
    console.log(res.data)
  }catch (err){
    console.log(err)
  }

}
