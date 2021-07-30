const UPDATE_GAME_FIELD = 'UPDATE_GAME_FIELD';
const CHANGE_PLAYER = 'CHANGE_PLAYER';

let initialState = {
    aboba: 'poshelNahuiPidar',
    currentPlayer: 'X',
    field: ['', '', '',
            '', '', '',
            '', '', '']
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_GAME_FIELD: {
            let newField = state.field;
            newField[action.numOfClickedField] = state.currentPlayer;

            return {
                ...state,
                field: [...newField]
            }
        }
        case CHANGE_PLAYER: {
            const newPlayer = state.currentPlayer === 'X' ? 'O' : 'X';

            return {
                ...state,
                currentPlayer: newPlayer
            }
        }
        default:
            return state;
    }
}

export const updateGameField = (numOfClickedField) => ({type: UPDATE_GAME_FIELD, numOfClickedField});
export const changePlayer = () => ({type: CHANGE_PLAYER});

export default appReducer