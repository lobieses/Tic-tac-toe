import React from 'react';
import {connect} from 'react-redux';
import Game from './game';

import {
    updateGameField,
    changePlayer
} from '../../Redux/app-reducer'

const GameContainer = (props) => {
    const onPlayerStep = (numOfClickedField) => {
        props.updateGameField(numOfClickedField);
        props.changePlayer();
    }

    return (
        <Game
            field={props.field}
            currentPlayer={props.currentPlayer}
            onPlayerStep={onPlayerStep}
        />
    )
}

const mapStateToProps = (state) => ({
    field: state.game.field,
    currentPlayer: state.game.currentPlayer
});

export default connect(mapStateToProps, {updateGameField, changePlayer})(GameContainer);