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

// appReducer types
export type appReducerType={
  isLoading:boolean
}

// sortTable type
export type SortValueType = 'period'|'year'|'org'
