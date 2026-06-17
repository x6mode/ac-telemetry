export const cutNullBytes = (stringWithNullBytes: string): string => {
  return stringWithNullBytes.split('%')[0];
};
