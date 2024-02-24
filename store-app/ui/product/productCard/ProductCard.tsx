import styles from "./ProductCard.module.css";
import { getProductCard } from "@/api/product/getProduct";

type ProductCardProps = {
  productId: string;
};

export default async function ProductCard({ productId }: ProductCardProps) {
  const product = await getProductCard(productId);
  if (!product) return <div>Product not found</div>;
  return (
    <div className={styles.wrapper}>
      <img src={product.img[1]} alt={product.img[1]} className={styles.img} />
      <img src={product.img[0]} alt={product.img[0]} className={styles.img} />

      <h2 className={styles.h2}>{product.name} </h2>
    </div>
  );
}
