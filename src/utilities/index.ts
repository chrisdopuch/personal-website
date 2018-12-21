export const shuffleArray = (array: any[]) => {
  let currentIndex = array.length;
  let temporaryValue = currentIndex;
  let randomIndex = currentIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
