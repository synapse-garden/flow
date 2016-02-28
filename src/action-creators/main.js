export const countTasks = ( lists ) => {
    let sum = lists.reduce( (prev, curr) => prev + cur)

    return{
        type: 'COUNT_TASKS',
        num: sum
    }
}
