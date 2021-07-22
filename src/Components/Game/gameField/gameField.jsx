import React from 'react';
import style from './gameField.module.css';

const GameField = (props) => {
    const click = (event) => {
        let a = event.target.getAttribute('data-num');
        debugger
    }

    return (
        <div className={style.game} onClick={click}>
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
        </div>
    )
}

export default GameField