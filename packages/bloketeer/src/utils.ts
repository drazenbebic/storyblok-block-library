export const option = (name: string, value: string | number) => ({
  name,
  value,
});

export const options = (options: [name: string, value: string | number][]) =>
  options.map(([name, value]) => ({
    name,
    value,
  }));
