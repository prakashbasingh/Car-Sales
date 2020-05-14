//here three things are must
// 1) action, 2) action creator, and 3) actions(action objects)

export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
//now creating action function
export const addFeature = (feature) => {
    console.log('ADD_FEATURE Action Creator calling???????????')
    return { type: ADD_FEATURE, payload: feature}
}

export const removeFeature = (feature) => {
    console.log('REMOVE_FEATURE Action Creator calling???????????')

    return {type: REMOVE_FEATURE, payload: feature}
}
