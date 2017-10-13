import {reducerConstants} from '../constants';

const initialState = {
    success: null,
    message: null,
    error: false,
    profile: {},
    sliderImages: [],
    gridImages: []
};
let newState = []
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case reducerConstants.profile.FETCHED:
            return{
                ...state,
                profile: action.payload
            }
        case reducerConstants.feedSlider.FETCHED:
            return{
                ...state,
                sliderImages: action.payload
            }
        case reducerConstants.feedGrid.FETCHED:
            return{
                ...state,
                gridImages: action.payload
            }
        default :
            return{...state}
    }
}