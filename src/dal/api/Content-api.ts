import { instance } from "dal/instance";

export const ContentApi ={
  getReviews(){
    return instance.get('reviews')
  }
}
