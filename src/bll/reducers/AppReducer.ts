import { appReducerType } from "types/types";
import { SetIsLoadingType } from "bll/actions/appReducer-actions";

const appReducerState={
  isLoading: false
}

export type AppReducerTypes = SetIsLoadingType
export const AppReducer = (state:appReducerType=appReducerState,action:AppReducerTypes):appReducerType=>{
  switch (action.type){
    case "SET-IS-LOADING":{
      return {...state,isLoading:action.isLoading}
    }
    default:return state
  }
}
