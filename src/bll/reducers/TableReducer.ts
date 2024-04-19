import {  TableReducerType } from "types/types";
import { SetReviewsType } from "bll/actions/reviews-actions";


export const tableReducerState = {} as TableReducerType

export type TableReducerActionsType = SetReviewsType
export const TableReducer =(state:TableReducerType = tableReducerState, action:TableReducerActionsType):TableReducerType=>{
switch (action.type){
  case "SET-REVIEWS":{
    return {...state,...action.data}
  }
  default:return state
}

}



