const getRandom = (max) => Math.round(Math.random() * max);

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

export { getRandom, findGcd };
