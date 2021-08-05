import React from 'react';
import style from './gameField.module.css';

const GameField = (props) => {
    const fields = props.field.map((a,num) => {
        let thisFieldIsBusy
        if(props.field[num]) {
            thisFieldIsBusy = props.field[num] === 'X' ? style.krestik : style.nolik;
        }

        return (
                <div key={num} className={style.markupField}>
                    <div
                        className={`${style.gameField} ${thisFieldIsBusy}`}
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

{/*
        <div className={style.markupField}>
                <div className={style.gameField}>1</div>
            </div>
            <div className={style.markupField}>
                <div className={`${style.gameField} ${style.nolik}`}>2</div>
            </div>
            <div className={style.markupField}>
                <div className={style.gameField}>3</div>
            </div>
            <div className={style.markupField}>
                <div className={style.gameField}>4</div>
            </div>
            <div className={style.markupField}>
                <div className={`${style.gameField} ${style.krestik}`}>5</div>
            </div>
            <div className={style.markupField}>
                <div className={style.gameField} data-num='6'>6</div>
            </div>
            <div className={style.markupField}>
                <div className={style.gameField}>7</div>
            </div>
            <div className={style.markupField}>
                <div className={style.gameField}>8</div>
            </div>
            <div className={style.markupField}>
                <div className={style.gameField}>9</div>
            </div>
*/}

export default GameField