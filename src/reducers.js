var initialState = {
    appTime: "Uninitialized",
    totalClicks: 0
}

export function mainReducer (state = initialState, action) {
    console.log('setTime reducer called.');

    switch (action.type) {
        case 'SET_APPTIME':
            return{
                ...state,
                appTime: action.time
            }
        case 'ADD_CLICK':
            return{
                ...state,
                totalClicks: state.totalClicks + 1
            }
        default:
        return state
    }

    console.log('AppTime now set to ', state.appTime );
}
