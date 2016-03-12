export const initFilters = (data) => {
    return{
        type: 'PUSH_FILTERS',
        data: data
    }
}

export const initObjects = (data) => {
    return{
        type: 'PUSH_OBJECTS',
        data: data
    }
}

export const initUsers = (data) => {
    return{
        type: 'PUSH_USERS',
        data: data
    }
}

export const finishLoading = () => {
    return{
        type: 'FINISH_LOADING'
    }
}
