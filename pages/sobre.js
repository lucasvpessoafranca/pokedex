import styles from '../styles/Sobre.module.css';
import Image from 'next/image';
export default function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <h1>Sobre o projeto </h1>
      <p>Projeto desenvolvido com a finalidade de estudar o NEXTJS</p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  );
}
