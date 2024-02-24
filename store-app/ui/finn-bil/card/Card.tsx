import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({
  children,
  href,
}: Readonly<{ children: React.ReactNode; href: string }>) {
  return (
    <Link href={href} className={styles["card-wrapper"]}>
      {children}
    </Link>
  );
}
