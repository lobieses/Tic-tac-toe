import React from 'react';
import {connect} from 'react-redux';
import Game from './game';

const GameContainer = (props) => {

    return (
        <Game />
    )
}

const mapStateToProps = (state) => ({
    field: state.game.field,
    currentPlayer: state.game.currentPlayer
});

export default connect(mapStateToProps, {})(GameContainer);