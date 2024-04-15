import { ReviewsReducerType } from "types/types";
import { SetReviewsType } from "bll/actions/reviews-actions";


export const reviewsReducerState = {} as ReviewsReducerType

export type ReviewsReducerActionsType = SetReviewsType
export const ReviewsReducer =(state:ReviewsReducerType = reviewsReducerState,action:ReviewsReducerActionsType):ReviewsReducerType=>{
switch (action.type){
  case "SET-REVIEWS":{
    return {...state,...action.data}
  }
  default:return state
}

}



