import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/store';
import {connect} from 'react-redux';

import GameContainer from "./Components/Game/gameContainer"
import InitialGameContainer from "./Components/InitialGame/initialGameContainer";

const App = ({isStartGame}) => {
        return (
            <div>
                {!isStartGame
                    ? <InitialGameContainer />
                    : <GameContainer />
                }
            </div>

    )
}

const mapStateToProps = (state) => ({
    isStartGame: state.initialGame.initialProcessIsFinish,
});

let AppContainer = connect(mapStateToProps, {})(App);

const TicTacToe = () => {
  return (
      <Provider store={store}>
          <AppContainer />
      </Provider>
  );
}

export default TicTacToe;
