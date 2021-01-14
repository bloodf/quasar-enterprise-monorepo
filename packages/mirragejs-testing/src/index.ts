export const sum = (a: number, b: number) => {
  if (process.env.APPLICATION_ENV === 'development') {
    console.log('boop');
  }

  return a + b;
};
