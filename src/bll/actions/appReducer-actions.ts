export type SetIsLoadingType =ReturnType<typeof setIsLoading>
export const setIsLoading = (isLoading:boolean)=>{
  return {
    type:'SET-IS-LOADING',
    isLoading
  }as const
}
export type SetCurrentPage =ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page:number)=>{
  return {
    type:'SET-CURRENT-PAGE',
    page
  }as const
}
