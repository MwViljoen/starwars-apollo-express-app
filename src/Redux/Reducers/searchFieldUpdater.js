const initialState = {
    searchField: ''
}

export const searchFieldUpdater = (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_SEARCH_FIELD':
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}