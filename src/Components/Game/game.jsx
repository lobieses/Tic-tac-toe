import React from 'react';
import style from './game.module.css';

import GameField from "./gameField/gameField";
import ScoreField from "./scoreField/scoreField";

const Game = (props) => {
    return (
        <div className={style.container}>
            <GameField
                field={props.field}
                currentPlayer={props.currentPlayer}
                onPlayerStep={props.onPlayerStep}
            />
            <ScoreField />
        </div>
    )
}


export default Game;