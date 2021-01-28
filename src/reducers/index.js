import { combineReducers } from "redux";
import { projectReducer } from "./ProjectReducer";


 export default  combineReducers({projects:projectReducer})