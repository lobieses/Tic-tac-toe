import React from 'react';
import style from './scoreField.module.css';

const ScoreField = (props) => {
    return (
        <div className={style.score}>
            <h1>Score</h1>
            <div className={style.players}>
                <div className={style.scorePlayer}>
                    <span>{props.playersAndScore[0].name}:</span><span>{props.playersAndScore[0].score}</span>
                </div>
                <div className={style.scorePlayer}>
                    <span>{props.playersAndScore[1].name}:</span><span>{props.playersAndScore[1].score}</span>
                </div>
            </div>
        </div>
    )
}

export default ScoreField