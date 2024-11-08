export const expensiveFunction = (number: number) => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += number;
  }

  return result;
};
