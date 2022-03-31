import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Card from '../components/Cards';
export async function getStaticProps() {
  const maxPokemons = 200;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.container}>
        <h1>
          Poke<span>Dex</span>
        </h1>

        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="pokedex"
        />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
