import { Level, Question } from '../redux/types';

export const getNextLevel = (levels: Array<Level>, currentId: number) => {
  const currentIndex = levels.findIndex((level) => level.id === currentId);

  if (currentIndex + 1 < levels.length) {
    return levels[currentIndex + 1];
  }

  return null;
};

export const getRandomQuestion = (questions: Array<Question>) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

export const getGameLevelObject = (nextLevel: Level) => ({
  id: nextLevel.id,
  amount: nextLevel.amount,
  question: getRandomQuestion(nextLevel.questions),
});
