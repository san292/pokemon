import { fetchApi } from '../../../utils/fetchApi';

export function customFetch(url) {
  const [pokemons, setPokemons] = useState([]);
  const FetchApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((allPokemon) => {
        setPokemons(allPokemon.results);
        console.log('allPokemon.results', allPokemon);
      });
  };

  useEffect(() => {
    FetchApi();
  }, []);
  return {
    ...pokemons,
    pokemons: [],
    loading,
    error
  };
}
