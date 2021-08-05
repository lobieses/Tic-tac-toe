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
            playersAndScore={props.playersAndScore}
            field={props.field}
            currentPlayer={props.currentPlayer}
            winnerPlayer={props.winnerPlayer}
            onPlayerStep={onPlayerStep}
            onRetryGame={onRetryGame}
        />
    )
}

const mapStateToProps = (state) => ({
    field: state.game.field,
    currentPlayer: state.game.currentPlayer,
    winnerPlayer: state.game.winnerPlayer,
    playersAndScore: [state.game.players['X'], state.game.players['O']],
});

export default connect(mapStateToProps, {updateGameField, changePlayer, checkWinner, renewGame})(GameContainer);