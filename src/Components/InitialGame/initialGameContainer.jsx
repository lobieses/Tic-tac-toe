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

const mapStateToProps = (state) => ({


});

export default connect(mapStateToProps, {setPlayers, finishInitialProcess})(InitialGameContainer);

