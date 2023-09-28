import React from 'react';
import { ReactComponent as HandImage } from '../../assets/images/hand.svg';
import Button from '../../components/Button/Button';
import { startGame } from '../../redux/gameSlice';
import { levelsSelector } from '../../redux/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './StartGameScreen.module.css';

const defaultQuestionIndex = 0;

function StartGameScreen() {
  const dispatch = useAppDispatch();
  const { levels } = useAppSelector(levelsSelector);

  const startGameHandler = () => {
    if (levels && levels.length) {
      dispatch(startGame(levels[defaultQuestionIndex]));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.half}>
        <HandImage className={styles.image} />
      </div>
      <div className={styles.half}>
        <h1>Who wants to be a millionaire?</h1>
        <div className={styles.btnContainer}>
          <Button clickHandler={startGameHandler}>Start</Button>
        </div>
      </div>
    </div>
  );
}

export default StartGameScreen;
