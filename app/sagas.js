// import Libraries
import {
    fork,
    takeEvery,
    takeLatest
} from "redux-saga/effects";

import {
    sagaConstants as ProfileSagaConstant
} from './modules/profile/constants';

// import sagas
import {
    getBio, getSliderImages, getGridImages
} from "./modules/profile/sagas";

export function* sagas() {
    yield [
        fork(takeLatest, ProfileSagaConstant.profile.FETCH, getBio),
        fork(takeLatest, ProfileSagaConstant.feedGrid.FETCH, getSliderImages),
        fork(takeLatest, ProfileSagaConstant.feedSlider.FETCH, getGridImages),
    ];
}