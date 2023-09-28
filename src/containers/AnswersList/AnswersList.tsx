import React, { useMemo } from 'react';
import AnswerItem from '../../components/AnswerItem/AnswerItem';
import { gameSelector } from '../../redux/selectors';
import { useAppSelector } from '../../redux/store';
import { Answer } from '../../redux/types';
import styles from './AnswersList.module.css';
import { getLetter } from './helper';

interface AnswersListProps {
  selectedAnswer: number;
  clickAnswerHandler: (i: number) => void;
}

function AnswersList({ selectedAnswer, clickAnswerHandler }: AnswersListProps) {
  const { level } = useAppSelector(gameSelector);

  const renderAnswers = useMemo(() => {
    if (!level || !level.question || !level.question.answers || !level.question.answers.length) {
      return <div>No answers</div>;
    }

    return level.question.answers.map((item: Answer, index: number) => (
      <AnswerItem
        key={getLetter(index)}
        letter={getLetter(index)}
        text={item.text}
        isActive={selectedAnswer === index}
        isCorrect={selectedAnswer === index && item.isCorrect}
        clickHandler={() => clickAnswerHandler(index)}
      />
    ));
  }, [level, selectedAnswer]);

  return <div className={styles.answersList}>{renderAnswers}</div>;
}

export default AnswersList;
