import {combineReducers} from "redux";
import {searchFieldUpdater} from "./searchFieldUpdater";

const allReducers = combineReducers({
    searchField: searchFieldUpdater
    //other reducers
});

export default allReducers;