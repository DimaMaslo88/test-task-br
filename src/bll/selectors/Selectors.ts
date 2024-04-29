import { StateType } from "bll/store";
import { FormReducerType, TableReducerType } from "types/types";

export const selectTableParams = (state:StateType):TableReducerType[] =>state.table
export const selectIsLoading = (state:StateType):boolean=>state.app.isLoading
export const selectFormParams = (state:StateType):FormReducerType[]=>state.form
