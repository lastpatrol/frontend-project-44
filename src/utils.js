const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

const findGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a === 0 ? b : a;
  }

  let devisor;
  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      devisor = i;
    }
  }

  return devisor;
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export { getRandomInRange, findGcd, isPrime };
