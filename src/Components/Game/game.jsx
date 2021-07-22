import React from 'react';
import style from './game.module.css';

import GameField from "./gameField/gameField";
import ScoreField from "./scoreField/scoreField";

const Game = (props) => {
    return (
        <div className={style.container}>
            <GameField />
            <ScoreField />
        </div>
    )
}


export default Game;