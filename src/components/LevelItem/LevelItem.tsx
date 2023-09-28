import React from 'react';
import styles from './LevelItem.module.css';
import { ReactComponent as LevelImage } from '../../assets/images/level.svg';

interface LevelItemProps {
  text: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

function LevelItem({ text, isActive, isDisabled }: LevelItemProps) {
  return (
    <div
      className={`${styles.levelItem} ${isActive ? styles.active : ''} ${
        isDisabled ? styles.disabled : ''
      }`}
    >
      <LevelImage className={styles.levelBgImage} />
      <div className={styles.levelText}>{text}</div>
    </div>
  );
}

LevelItem.defaultProps = {
  isActive: false,
  isDisabled: false,
};

export default LevelItem;
