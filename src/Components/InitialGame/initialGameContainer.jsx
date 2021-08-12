import React from 'react';
import {connect} from 'react-redux';
import InitialGame from "./initialGame";
import {
    setPlayers,
    finishInitialProcess
} from '../../Redux/app-reducer';

const InitialGameContainer = (props) => {
    const onSubmit = (form) => {
        props.setPlayers([form.player1, form.player2]);
        props.finishInitialProcess();
    }

    return (
        <div>
            <InitialGame onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null, {setPlayers, finishInitialProcess})(InitialGameContainer);

