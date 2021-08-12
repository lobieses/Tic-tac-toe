import React from 'react';
import style from './game.module.css';

import GameField from "./gameField/gameField";
import ScoreField from "./scoreField/scoreField";
import WinOrDrawField from "./winOrDrawField/winOrDrawField";

const Game = (props) => {
    return (
        <div className={style.container}>
            <GameField
                field={props.field}
                currentPlayer={props.currentPlayer}
                onPlayerStep={props.onPlayerStep}
                winnerPlayer={props.winnerPlayer}
                winCombination={props.winCombination}
            />
            {props.winnerPlayer || props.isDraw
                ? <WinOrDrawField
                    winnerPlayer={props.winnerPlayer}
                    isDraw={props.isDraw}
                    onRetryGame={props.onRetryGame}
                />
                : <ScoreField
                    playerInfo={props.playerInfo}
                    currentPlayer={props.currentPlayer}
                />
            }
        </div>
    )
}

export default Game;