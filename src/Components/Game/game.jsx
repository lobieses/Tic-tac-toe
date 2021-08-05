import React from 'react';
import style from './game.module.css';

import GameField from "./gameField/gameField";
import ScoreField from "./scoreField/scoreField";
import WinField from "./winField/winField";

const Game = (props) => {
    return (
        <div className={style.container}>
            <GameField
                field={props.field}
                currentPlayer={props.currentPlayer}
                onPlayerStep={props.onPlayerStep}
                winnerPlayer={props.winnerPlayer}
            />
            {props.winnerPlayer
                ? <WinField
                    winnerPlayer={props.winnerPlayer}
                    onRetryGame={props.onRetryGame}
                />
                : <ScoreField
                    playersAndScore={props.playersAndScore}
                />

            }

        </div>
    )
}


export default Game;