import styles from "./ProductDisplay.module.css";

import ProductCard from "../productCard/ProductCard";

type ProductDisplayProps = {
  title: string;
  productIds: string[];
};

export default function ProductDisplay({
  title,
  productIds,
}: ProductDisplayProps) {
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      <div className="center flex-gap standard-padding">
        {productIds.map((productId) => (
          <ProductCard productId={productId} key={productId} />
        ))}
      </div>
    </section>
  );
}
