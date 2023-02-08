const initState = {
    count: 0,
}

function counterReducer(state = initState, action) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1,
            }
        case 'decrement':
            return {
                count: state.count - 1,
            }
        case 'incrementNumber':
            return {
                count: state.count + action.payload,
            }
        default:
            return state
    }
}

export default counterReducer
