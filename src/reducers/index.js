import { combineReducers } from "redux";
import { projectReducer } from "./ProjectReducer";
import {columnReducer} from './ColumnReducer'

 export default  combineReducers({projects:projectReducer,columns:columnReducer})