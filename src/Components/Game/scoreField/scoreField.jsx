import React from 'react';
import style from './scoreField.module.css';

const ScoreField = (props) => {
    return (
        <div className={style.score}>
            <h1>Score</h1>
            <div className={style.players}>
                <h1>Player: 0</h1>
                <h1>Player 2: 0</h1>
            </div>

        </div>
    )
}

export default ScoreField