const type = 'reducer';
const namespace = 'user';

export const profile = generateReducerConstants(type, namespace, 'profile');
export const feedSlider = generateReducerConstants(type, namespace, 'feedSlider');
export const feedGrid = generateReducerConstants(type, namespace, 'feedGrid');

// TODO move this function to a common folder
function generateReducerConstants(type, namespace, key) {
    return {
        FETCHING: '' + type + '/' + namespace + '/' + key + '/FETCHING',
        FETCHED: '' + type + '/' + namespace + '/' + key + '/FETCHED',
        SENDING: '' + type + '/' + namespace + '/' + key + '/SENDING',
        SENT: '' + type + '/' + namespace + '/' + key + '/SENT',
        TOGGLE_SELECT: '' + type + '/' + namespace + '/' + key + '/TOGGLE_SELECT',
        TOGGLE_SELECT_ALL: '' + type + '/' + namespace + '/' + key + '/TOGGLE_SELECT_ALL',
        SUCCESS: '' + type + '/' + namespace + '/' + key + '/SUCCESS',
        ERROR: '' + type + '/' + namespace + '/' + key + '/ERROR',
        DISCARD: '' + type + '/' + namespace + '/' + key + '/DISCARD',
    }
}