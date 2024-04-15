import { ReviewsReducerType } from "types/types";

export type SetReviewsType = ReturnType<typeof setReviews>
export const setReviews =(data:ReviewsReducerType)=>{
  return{
    type:'SET-REVIEWS',
    data
  }as const
}
