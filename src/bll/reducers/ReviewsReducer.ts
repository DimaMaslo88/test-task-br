import { ReviewsReducerType } from "types/types";
import { AppThunkType } from "bll/store";
import { ContentApi } from "dal/api/Content-api";


export const reviewsReducerState = {} as ReviewsReducerType


export const ReviewsReducer =(state:ReviewsReducerType = reviewsReducerState,action:any):ReviewsReducerType=>{
switch (action.type){

  default:return state
}

}



