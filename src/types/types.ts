// reducer types
export type TableReducerType={
  f_pers_young_spec_id: number,
  insert_date:string,
  insert_user:string,
  org_employee:string,
  rep_beg_period:string,
  rep_end_period:string,
  update_date:string,
  update_user:string
}
export type FormReducerType ={
  f_pers_young_spec_line_id: number,
  target_count: number,
  distribution_count: number,
  update_date: string,
  update_user: string,
  nsi_pers_indicate_id: number,
  f_pers_young_spec_id: number
}

// appReducer types
export type appReducerType={
  isLoading:boolean
}

// sortTable type
export type SortValueType = 'period'|'year'|'org'
