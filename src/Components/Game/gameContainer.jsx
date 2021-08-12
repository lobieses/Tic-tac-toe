import React from 'react';
import {connect} from 'react-redux';
import Game from './game';

import {
    updateGameField,
    changePlayer,
    checkWinner,
    renewGame
} from '../../Redux/app-reducer'


const GameContainer = (props) => {
    const onPlayerStep = (numOfClickedField) => {
        props.updateGameField(numOfClickedField);
        props.checkWinner();
        props.changePlayer();
    }

    const onRetryGame = () => {
        props.renewGame();
    }

    return (
        <Game
            playerInfo={props.playerInfo}
            field={props.field}
            currentPlayer={props.currentPlayer}
            winnerPlayer={props.winnerPlayer}
            winCombination={props.winCombination}
            isDraw={props.isDraw}
            onPlayerStep={onPlayerStep}
            onRetryGame={onRetryGame}
        />
    )
}

const mapStateToProps = (state) => ({
    field: state.game.field,
    currentPlayer: state.game.currentPlayer,
    winnerPlayer: state.game.winnerPlayer,
    winCombination: state.game.winCombination,
    isDraw: state.game.isDraw,
    playerInfo: state.game.players
});

export default connect(mapStateToProps, {updateGameField, changePlayer, checkWinner, renewGame})(GameContainer);