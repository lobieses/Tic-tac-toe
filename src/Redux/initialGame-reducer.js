const SET_PLAYERS = 'SET_PLAYERS';
const FINISH_INITIAL_PROCESS = 'FINISH_INITIAL_PROCESS';

let initialState = {
    player1: undefined,
    player2: undefined,
    initialProcessIsFinish: true
};

const initialGameReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYERS: {
            return {
                ...state,
                player1: action.players[0],
                player2: action.players[1]
            }
        }
        case FINISH_INITIAL_PROCESS: {
            return {
                ...state,
                initialProcessIsFinish: true
            }
        }
        default:
            return state;
    }
}

export const setPlayers = players => ({type: SET_PLAYERS, players});

export const finishInitialProcess = () => ({type: FINISH_INITIAL_PROCESS});


export default initialGameReducer