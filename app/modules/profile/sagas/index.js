import {
    call,
    put
} from "redux-saga/effects";

import {
    reducerConstants,
    sagaConstants
} from '../constants';

import { ProfileAPI, GridAPI } from '../requests/index'

export function* getBio(action) {
    
    const response = yield call(ProfileAPI.getBio, action);
    if(response.status == 200){
        yield put({
            type: reducerConstants.profile.FETCHED,
            payload: response.data,
        });
    }else{
        yield put({
            type: reducerConstants.profile.ERROR,
            error: "",
        });
    }
}

export function* getSliderImages(action) {
    const response = yield call(GridAPI.sliderImages, action);
    
    if(response.status == 200){
        if(response.data.result){
            yield put({
                type: reducerConstants.feedSlider.FETCHED,
                payload: response.data.result.posts || [],
            });
        }
    }else{
        yield put({
            type: reducerConstants.feedSlider.ERROR,
            error: "",
        });
    }
}

export function* getGridImages(action) {
    const response = yield call(GridAPI.gridImages, action);
    console.log(response)
    if(response.status == 200){
        if(response.data.result){
            yield put({
                type: reducerConstants.feedGrid.FETCHED,
                payload: response.data.result.posts || [],
            });
        }
    }else{
        yield put({
            type: reducerConstants.feedGrid.ERROR,
            error: "",
        });
    }
}