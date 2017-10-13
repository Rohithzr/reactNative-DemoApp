const type = 'saga';
const namespace = 'user';

export const profile = generateSagaConstants(type, namespace, 'profile');
export const feedSlider = generateSagaConstants(type, namespace, 'feedSlider');
export const feedGrid = generateSagaConstants(type, namespace, 'feedGrid');

// TODO move this function to a common folder
function generateSagaConstants(type, namespace, key) {
    return {
        DISPATCH: '' + type + '/' + namespace + '/' + key + '/DISPATCH',
        FETCH: '' + type + '/' + namespace + '/' + key + '/FETCH'
    }
}