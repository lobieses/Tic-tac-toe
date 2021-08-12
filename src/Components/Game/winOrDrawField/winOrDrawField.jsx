import React from 'react';
import style from './winOrDrawField.module.css';

const WinOrDrawField = (props) => {
    return (
        <div className={style.win}>
            <h1>
                {props.isDraw
                    ? 'is draw!'
                    : `${props.winnerPlayer} won!`
                }
            </h1>
            <button onClick={props.onRetryGame}>Retry game</button>
        </div>
    )
}

export default WinOrDrawField;