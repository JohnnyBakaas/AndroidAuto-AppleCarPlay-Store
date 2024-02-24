import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="https://techcrunch.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-05-at-1.18.20-pm.png"
        alt="https://techcrunch.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-05-at-1.18.20-pm.png"
      />
      <div className={styles["text-wrapper"]}>
        <h1>Slipp bota for å bytte spillelista</h1>
        <h2>
          <Link href={"/finn-bil"}> Finn enheten som passer bilen din</Link>
        </h2>
      </div>
    </div>
  );
}
