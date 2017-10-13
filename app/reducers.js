// import Libraries
import {combineReducers} from "redux";
// export global combined reducer

// import reducers
import profile from './modules/profile/reducers';

// combine reducers
export const reducers = combineReducers({
        profile
    }
);