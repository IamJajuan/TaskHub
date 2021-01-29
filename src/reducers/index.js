import { combineReducers } from "redux";
import { projectReducer } from "./ProjectReducer";
import {columnReducer} from './ColumnReducer'
import { taskReducer } from "./TaskReducer";

 export default  combineReducers({projects:projectReducer,columns:columnReducer,tasks:taskReducer})