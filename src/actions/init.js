export const initLists = (data) => {
    return{
        type: 'GET_LISTS',
        data: data
    }
}

export const initUsers = (data) => {
    return{
        type: 'GET_USERS',
        data: data
    }
}
