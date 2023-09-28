export const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const getLetter = (index: number) => {
  if (index > letters.length) {
    return letters[letters.length - 1];
  }

  return letters[index];
};
