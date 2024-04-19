import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

import {useDispatch} from "react-redux";
import { TableReducer, TableReducerActionsType } from "bll/reducers/TableReducer";



const rootReducer = combineReducers({
   table:TableReducer
})
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    StateType,
    undefined,
    ActionStateType>;
export type AppDispatch = ThunkDispatch<StateType,
    undefined,
    ActionStateType>;
export type ActionStateType = TableReducerActionsType
export type StateType = ReturnType<typeof rootReducer>
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store
