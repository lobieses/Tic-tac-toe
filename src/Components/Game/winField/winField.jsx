import React from 'react';
import style from './winField.module.css';

const WinField = (props) => {
    return (
        <div className={style.win}>
            <h1>{props.winnerPlayer} is win!</h1>
            <button onClick={props.onRetryGame}>Retry game</button>
        </div>
    )
}


export default WinField;