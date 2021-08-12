import React from 'react';
import style from './gameField.module.css';
import winLine from './stylesForWinLine.module.css';

const GameField = (props) => {
    const fields = props.field.map((a,num) => {
        let thisFieldIsBusy
        const classForWinnerLine = num === 0 && props.winCombination ? winLine[props.winCombination] : '';

        if(props.field[num]) {
            thisFieldIsBusy = props.field[num] === 'X' ? style.cross : style.zero;
        }

        return (
                <div key={num} className={`${style.markupField} ${classForWinnerLine}`}>
                    <div
                        className={`${style.gameField} ${thisFieldIsBusy ? thisFieldIsBusy : ''}`}
                        onClick={
                            props.field[num] || props.winnerPlayer
                                ? null
                                : () => props.onPlayerStep(num)
                        }
                    ></div>
                </div>
            )
    });

    return (
        <div className={style.game}>
            {fields}
        </div>
    )
}

export default GameField