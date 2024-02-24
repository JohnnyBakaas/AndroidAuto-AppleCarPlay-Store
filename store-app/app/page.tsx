import Hero from "@/ui/home/hero/Hero";
import styles from "./page.module.css";
import MissionStatement from "@/ui/home/missionStatement/MissionStatement";
import ProductCard from "@/ui/product/productCard/ProductCard";
import ProductDisplay from "@/ui/product/productDisplay/ProductDisplay";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <MissionStatement />
      <ProductDisplay title="Best selgere" productIds={["1", "1", "1"]} />
    </main>
  );
}
