import {checkWinnerFunc} from "../utils/checkWinner";

const UPDATE_GAME_FIELD = 'UPDATE_GAME_FIELD';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const CHECK_WINNER = 'CHECK_WINNER';
const SET_PLAYERS = 'SET_PLAYERS';
const FINISH_INITIAL_PROCESS = 'FINISH_INITIAL_PROCESS';
const RENEW_GAME = 'RENEW_GAME';

let initialState = {
    players: undefined,
    initialProcessIsFinish: false,
    currentPlayer: 'X',
    field: ['', '', '',
            '', '', '',
            '', '', ''],
    winnerPlayer: undefined
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYERS: {
            return {
                ...state,
                players: {
                    'X': {
                            name: action.players[0],
                            score: 0,
                        },
                    'O': {
                            name: action.players[1],
                            score: 0,
                        },
                }
            }
        }
        case FINISH_INITIAL_PROCESS: {
            return {
                ...state,
                initialProcessIsFinish: true
            }
        }
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
        case CHECK_WINNER: {
            let winnerPlayer = undefined;
            let players = state.players;

            if(checkWinnerFunc(state.field)) {
                winnerPlayer = state.players[state.currentPlayer].name;
                players[state.currentPlayer].score++
            }
            return {
                ...state,
                winnerPlayer,
                players
            }
        }
        case RENEW_GAME: {
            return {
                ...state,
                winnerPlayer: undefined,
                currentPlayer: 'X',
                field: ['', '', '',
                    '', '', '',
                    '', '', '']
            }
        }
        default:
            return state;
    }
}


export const setPlayers = players => ({type: SET_PLAYERS, players});
export const finishInitialProcess = () => ({type: FINISH_INITIAL_PROCESS});
export const updateGameField = (numOfClickedField) => ({type: UPDATE_GAME_FIELD, numOfClickedField});
export const changePlayer = () => ({type: CHANGE_PLAYER});
export const checkWinner = () => ({type: CHECK_WINNER});
export const renewGame = () => ({type: RENEW_GAME});




export default appReducer