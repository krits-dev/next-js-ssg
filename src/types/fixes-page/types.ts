export interface IFixLink {
  _title: string
  fixslug: string
}

export interface IFixData {
  bg_image: string
  title: string
  states: { id: string; state: string; path: string }[]
  other_fixes: IFixLink[]
  all_states: { id: string; state: string; path: string }[]
}

export interface IStates {
  id?: string
  state?: string
  path?: string
  state_id?: string
  state_name?: string
  fixslug?: string
}

export interface ILink {
  title?: string
  path?: string
  _title?: string
  fixslug?: string
}
