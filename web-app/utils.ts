export const convertTsToString = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
