import React, { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { gameSelector, levelsSelector } from '../../redux/selectors';
import styles from './GameScreen.module.css';
import LevelsList from '../LevelsList/LevelsList';
import AnswersList from '../AnswersList/AnswersList';
import { Answer, Level } from '../../redux/types';
import { getNextLevel } from '../../helpers/levelsHelper';
import {
  endGame, setEarnedAmount, setNextLevel, setSelectedAnswer,
} from '../../redux/gameSlice';
import useWindowDimensions from '../../helpers/useWindowDimentions';
import { ReactComponent as CloseImage } from '../../assets/images/close.svg';
import { ReactComponent as MenuImage } from '../../assets/images/menu.svg';

const showLevelsFromWidth = 1024;

function GameScreen() {
  const dispatch = useAppDispatch();
  const { levels } = useAppSelector(levelsSelector);
  const { level, selectedAnswer } = useAppSelector(gameSelector);
  const [isShowLevels, setIsShowLevels] = useState(false);
  const { width } = useWindowDimensions();

  const answerClickHanlder = useCallback(
    (answerIndex: number) => {
      dispatch(setSelectedAnswer(answerIndex));

      setTimeout(() => {
        if (levels && level && level.question && level.question.answers) {
          if (
            level.question.answers.some(
              (item: Answer, index: number) => index === answerIndex && !item.isCorrect,
            )
          ) {
            dispatch(endGame());
          } else {
            const nextLevel: Level | null = getNextLevel(levels, level.id);

            dispatch(setEarnedAmount(level.amount));

            if (nextLevel) {
              dispatch(setNextLevel(nextLevel));
            } else {
              dispatch(endGame());
            }
          }
        }
      }, 1000);
    },
    [levels, level, dispatch],
  );

  return (
    <div className={styles.container}>
      <div className={styles.questionOuterContainer}>
        {width <= showLevelsFromWidth ? (
          <button
            type="button"
            className={styles.menuContainer}
            onClick={() => setIsShowLevels((prev) => !prev)}
          >
            {isShowLevels ? <CloseImage /> : <MenuImage />}
          </button>
        ) : null}

        <div className={styles.questionContainer}>
          <h4 className={styles.question}>
            {level && level.question ? level.question.text : 'No questions'}
          </h4>
          <div className={styles.answersListContainer}>
            <AnswersList
              selectedAnswer={selectedAnswer}
              clickAnswerHandler={(index) => answerClickHanlder(index)}
            />
          </div>
        </div>
      </div>
      {(width > showLevelsFromWidth || isShowLevels) && (
        <div
          className={`${styles.levelsListContainer} ${
            width <= showLevelsFromWidth ? styles.mobLevelsListContainer : ''
          }`}
        >
          <LevelsList />
        </div>
      )}
    </div>
  );
}

export default GameScreen;
