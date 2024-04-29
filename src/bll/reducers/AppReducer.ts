import { appReducerType } from "types/types";
import { SetCurrentPage, SetIsLoadingType } from "bll/actions/appReducer-actions";

const appReducerState={
  isLoading: false,
  currentPage:1
}

export type AppReducerTypes = SetIsLoadingType
|SetCurrentPage
export const AppReducer = (state:appReducerType=appReducerState,action:AppReducerTypes):appReducerType=>{
  switch (action.type){
    case "SET-IS-LOADING":{
      return {...state,isLoading:action.isLoading}
    }
    case "SET-CURRENT-PAGE":{
      return {...state,currentPage:action.page}
    }
    default:return state
  }
}
