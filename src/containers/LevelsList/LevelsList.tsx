import React, { useMemo } from 'react';
import { useAppSelector } from '../../redux/store';
import { gameSelector, levelsSelector } from '../../redux/selectors';
import { Level } from '../../redux/types';
import LevelItem from '../../components/LevelItem/LevelItem';
import styles from './LevelsList.module.css';

function LevelsList() {
  const { levels } = useAppSelector(levelsSelector);
  const { level } = useAppSelector(gameSelector);

  const renderLevels = useMemo(() => {
    if (!levels) {
      return <div>No levels</div>;
    }

    const reversedLevels = [...levels].reverse();

    return reversedLevels.map((item: Level) => (
      <LevelItem
        key={item.id}
        isActive={!!(level && level.id === item.id)}
        isDisabled={!!(level && level.id > item.id)}
        text={item.amount}
      />
    ));
  }, [levels, level]);

  return <div className={styles.levelsList}>{renderLevels}</div>;
}

export default LevelsList;
