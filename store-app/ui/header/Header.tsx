import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <h1>Slipp bota</h1>
        </Link>
        <Link href={"/finn-bil"}>
          <h2>Finn din bil</h2>
        </Link>
      </header>
      <div className={styles["header-spacer"]} />
    </>
  );
}
