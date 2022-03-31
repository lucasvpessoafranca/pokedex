import Image from 'next/image';
import styles from '../../styles/Pokemon.module.css';
export const getStaticPaths = async () => {
  const maxPokemons = 200;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.pokemonContainer}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="160"
        height="160"
        alt={pokemon.name}
      />
      <div className="numero">
        <h3>Número:</h3>
        <p>{pokemon.id}</p>
      </div>
      <div className="numero">
        <h3>Tipo:</h3>
        <p className={styles.typesContainer}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
