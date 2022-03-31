import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/pokeball.png" width="30" height="30" alt="Logo" />
          <Link href="/">
            <a> PokeDex</a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
