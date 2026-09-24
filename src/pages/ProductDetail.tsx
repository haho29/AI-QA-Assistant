import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");

  if (!product) {
    return (
      <div className="products-page">
        <Navbar />

        <main className="product-not-found">

          <div className="empty-icon">🔍</div>

          <h1>Product Not Found</h1>

          <p>
            The product you are looking for does not exist.
          </p>

          <Link
            to="/products"
            className="back-products-button"
          >
            Back to Products
          </Link>

        </main>

        <Footer />
      </div>
    );
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setCartMessage(
      `${quantity} × ${product.name} added to cart.`
    );
  };

  return (
    <div className="products-page">

      <Navbar />

      <main className="product-detail-main">

        <Link
          to="/products"
          className="back-products"
        >
          ← Back to Products
        </Link>

        <section className="product-detail-card">

          <div className="product-detail-image">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

          <div className="product-detail-info">

            <span className="detail-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="detail-rating">
              ★ {product.rating}
            </div>

            <div className="detail-price">
              {product.price.toLocaleString("vi-VN")} ₫
            </div>

            <p className="detail-description">
              {product.description}
            </p>

            <div className="detail-stock">
              <span>Stock:</span>
              <strong>{product.stock} available</strong>
            </div>

            <div className="quantity-section">

              <label htmlFor="quantity">
                Quantity
              </label>

              <div className="quantity-control">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  data-testid="quantity-decrease"
                >
                  −
                </button>

                <span
                  id="quantity"
                  data-testid="quantity-value"
                >
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                  data-testid="quantity-increase"
                >
                  +
                </button>

              </div>

            </div>

            <button
              type="button"
              className="add-cart-button"
              onClick={handleAddToCart}
              data-testid="add-to-cart"
            >
              Add to Cart
            </button>

            {cartMessage && (
              <div
                className="cart-success-message"
                data-testid="cart-message"
              >
                ✓ {cartMessage}
              </div>
            )}

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default ProductDetail;