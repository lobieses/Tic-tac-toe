import React from 'react';
import {connect} from 'react-redux';
import InitialGame from "./initialGame";
import {
    setPlayers,
    finishInitialProcess
} from '../../Redux/initialGame-reducer';

const InitialGameContainer = (props) => {
    const onSubmit = (form) => {
        props.setPlayers(form);
        props.finishInitialProcess();
    }

    return (
        <div>
            <InitialGame onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    aboba: state.game.aboba,
});

export default connect(mapStateToProps, {setPlayers, finishInitialProcess})(InitialGameContainer);

