let initialState = {
    aboba: 'poshelNahuiPidar',
    currentPlayer: 'X',
    field: ['', '', '',
            '', '', '',
            '', '', '']
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default appReducer