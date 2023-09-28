import React from 'react';
import { ReactComponent as HandImage } from '../../assets/images/hand.svg';
import Button from '../../components/Button/Button';
import { startGame } from '../../redux/gameSlice';
import { gameSelector, levelsSelector } from '../../redux/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './GameOverScreen.module.css';

const defaultQuestionIndex = 0;

function GameOverScreen() {
  const dispatch = useAppDispatch();
  const { levels } = useAppSelector(levelsSelector);
  const { earnedAmount } = useAppSelector(gameSelector);

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
        <h4 className={styles.h4}>Total score:</h4>
        <h1>
          <span>{earnedAmount || '$0'}</span>
          &nbsp;earned
        </h1>
        <div className={styles.btnContainer}>
          <Button clickHandler={startGameHandler}>Try again</Button>
        </div>
      </div>
    </div>
  );
}

export default GameOverScreen;
