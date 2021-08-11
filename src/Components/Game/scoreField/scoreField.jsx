import React from 'react';
import style from './scoreField.module.css';

const ScoreField = (props) => {
    const playersAndScore = [props.playerInfo['X'], props.playerInfo['O']]


    return (
        <div className={style.score}>
            <h1>Score</h1>
            <div className={style.players}>
                <div className={style.scorePlayer}>
                    <span className={style.namesPlayer}>{playersAndScore[0].name}:</span><span>{playersAndScore[0].score}</span>
                </div>
                <div className={style.scorePlayer}>
                    <span className={style.namesPlayer}>{playersAndScore[1].name}:</span><span>{playersAndScore[1].score}</span>
                </div>
            </div>
            <div className={style.currentPlayer}>
                <div>current player</div>
                <div className={style.current}>
                    {props.playerInfo[props.currentPlayer].name} (<span>{props.currentPlayer}</span>)
                </div>
            </div>
        </div>
    )
}

export default ScoreField