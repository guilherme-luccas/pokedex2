import styles from "../../../styles/LazyLoading.module.css";
export function LazyLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.pokemonImage}></div>
      <div>
        <div className={styles.pokemonName}></div>
        <div className={styles.pokemonTypes}></div>
        <div className={styles.pokemonCP}></div>
      </div>

      <div className={styles.pokemonNumber}></div>
    </div>
  );
}
