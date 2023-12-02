import {reducer} from "./reducer/Reducer.js"
import {createStore} from "redux"

export const store = createStore(reducer)