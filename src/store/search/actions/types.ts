import {
  GET_SEARCH,
  SET_SEARCH
} from '.'

export interface GetSearch {
  type: typeof GET_SEARCH
}
export interface SetSearch {
  type: typeof SET_SEARCH
}


export type SearchTypes =
  | GetSearch
  | SetSearch
