import React, { useEffect } from 'react';
import GameOverScreen from './containers/GameOverScreen/GameOverScreen';
import StartGameScreen from './containers/StartGameScreen/StartGameScreen';
import { fetchLevelsData } from './redux/levelsSlice';
import { gameSelector, levelsSelector } from './redux/selectors';
import { useAppDispatch, useAppSelector } from './redux/store';
import GameScreen from './containers/GameScreen/GameScreen';

function App() {
  const { isGameStarted, isGameOver } = useAppSelector(gameSelector);
  const dispatch = useAppDispatch();
  const { levels, status } = useAppSelector(levelsSelector);

  useEffect(() => {
    if (!levels && status !== 'failed') {
      dispatch(fetchLevelsData());
    }
  }, [levels, dispatch]);

  if (!levels || !levels.length) {
    return <div>No levels</div>;
  }

  if (!isGameStarted) {
    return <StartGameScreen />;
  }

  if (isGameOver) {
    return <GameOverScreen />;
  }

  return <GameScreen />;
}

export default App;
