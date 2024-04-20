import { instance } from "dal/instance";

export const ContentApi ={
  getHeaderData(){
    return instance.get('/f_pers_young_spec/')
  }
}
