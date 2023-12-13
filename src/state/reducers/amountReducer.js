const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'deposit':
            if (typeof action.payload === 'number' && !isNaN(action.payload)) {
                return state + action.payload;
            }
            break;

        case 'withdraw':
            if (typeof action.payload === 'number' && !isNaN(action.payload)) {
                return state - action.payload;
            }
            break;

        default:
            return state;
    }
};
export default reducer;  