import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Cards.module.css';
export default function Card({ pokemon }) {
  return (
    <div className={styles.cards}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>{pokemon.id}</p>
      <h3 className={styles.name}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.detalhes}>Detalhes</a>
      </Link>
    </div>
  );
}
