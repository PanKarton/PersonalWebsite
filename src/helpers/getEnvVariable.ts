export const getEnvVariable = (name: string | undefined) => {
  if (!name) throw Error('Missing env variable');

  return name;
};
