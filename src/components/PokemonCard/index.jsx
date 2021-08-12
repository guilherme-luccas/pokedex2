import styles from "../../../styles/PokemonCard.module.css";
import Image from "next/image";

export function PokemonCard({ name, cp, number, image, types }) {
  let color = "";
  if (cp <= 500) {
    color = "#F87060";
  } else if (cp >= 501 && cp <= 1000) {
    color = "#662C91";
  } else if (cp >= 1001 && cp <= 1500) {
    color = "#F5B700";
  } else {
    color = "#00C1FD";
  }
  return (
    <div className={styles.container}>
      <div className={styles.pokemonImage}>
        <Image src={image} height={62} width={64} />
      </div>
      <div>
        <div className={styles.pokemonName}>{name}</div>
        <div className={styles.pokemonTypes}>
          {types.map((tipo, index) => {
            return <div key={index}>{tipo}</div>;
          })}
        </div>
        <div
          style={{
            backgroundColor: color,
          }}
          className={styles.pokemonCP}
        >
          {cp}
        </div>
      </div>

      <div className={styles.pokemonNumber}>{number}</div>
    </div>
  );
}
