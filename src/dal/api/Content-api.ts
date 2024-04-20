import { instance } from "dal/instance";
import { TableReducerType } from "types/types";

export const ContentApi ={
  getHeaderData(){
    return instance.get<TableReducerType[]>('/f_pers_young_spec/')
  }
}
