import { TableReducerType } from "types/types";


export type SetReviewsType = ReturnType<typeof setReviews>
export const setReviews =(data:TableReducerType)=>{
  return{
    type:'SET-REVIEWS',
    data
  }as const
}
