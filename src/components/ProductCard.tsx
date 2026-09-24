import { Link } from "react-router-dom";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">

      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="product-category">
          {product.category}
        </span>
      </div>

      <div className="product-content">

        <div className="product-rating">
          ★ {product.rating}
        </div>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-footer">

          <strong>
            {product.price.toLocaleString("vi-VN")} ₫
          </strong>

          <span className="product-stock">
            {product.stock} in stock
          </span>

        </div>

        <Link
          to={`/products/${product.id}`}
          className="product-button"
          data-testid={`view-product-${product.id}`}
        >
          View Details
        </Link>

      </div>

    </article>
  );
}

export default ProductCard;