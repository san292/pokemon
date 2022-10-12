export const FetchApi = async (path) => {
  return await useFetch(() => `https://pokeapi.co/api/v2/pokemon//${path}`);
};
