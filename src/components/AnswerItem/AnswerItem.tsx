import React, { KeyboardEvent } from 'react';
import { ReactComponent as AnswerImage } from '../../assets/images/answer.svg';
import styles from './AnswerItem.module.css';

interface AnswerItemProps {
  letter: string;
  text: string;
  isActive?: boolean;
  isCorrect?: boolean;
  clickHandler: () => void;
}

function AnswerItem({
  letter, text, isActive, isCorrect, clickHandler,
}: AnswerItemProps) {
  return (
    <div
      className={`${styles.answerItem} ${
        isActive ? `${styles.active} ${isCorrect ? styles.correct : styles.wrong}` : ''
      }`}
      onClick={clickHandler}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === '13') {
          clickHandler();
        }
      }}
      role="button"
      tabIndex={-1}
    >
      <AnswerImage className={styles.answerBgImage} />
      <div className={styles.answerText}>
        <span className={styles.answerVariantLetter}>{letter}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

AnswerItem.defaultProps = {
  isActive: false,
  isCorrect: false,
};

export default AnswerItem;
