var initialState = {}

export function setTime ( ) {
    console.log('setTime reducer called.');

    switch (action.type) {
        case 'SET_APPTIME':
            return{
                ...state,
                AppTime: action.time
            }
        case 'ADD_CLICK':
            return{
                ...state,
                TotalClicks: state.TotalClicks + 1
            }
        default:
        return state
    }

    console.log('AppTime now set to ', state.AppTime );
}
