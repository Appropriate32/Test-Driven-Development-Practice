function calculateAverage(numbers) {
  let avg = 0;
  for (const number of numbers) {
    avg += number;
  }
  return avg / numbers.length;
}

function findMin(numbers) {
  return Math.min(...numbers);
}

function findMax(numbers) {
  return Math.max(...numbers);
}

export const analyzeArray = (numbers) => {
  if (numbers.length === 0) return null;
  return {
    average: calculateAverage(numbers),
    min: findMin(numbers),
    max: findMax(numbers),
    length: numbers.length,
  };
};
