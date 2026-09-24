import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...Array.from(
      new Set(products.map((product) => product.category))
    ),
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "price-low") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "price-high") {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating") {
      result = [...result].sort(
        (a, b) => b.rating - a.rating
      );
    }

    return result;
  }, [search, category, sort]);

  return (
    <div className="products-page">

      <Navbar />

      <main className="products-main">

        <section className="products-header">

          <div>
            <div className="demo-badge">
              <span className="demo-badge-dot"></span>
              QA PRODUCT CATALOG
            </div>

            <h1>Explore Products</h1>

            <p>
              Browse products and explore realistic
              e-commerce testing scenarios.
            </p>
          </div>

          <div className="products-count">
            {filteredProducts.length} products
          </div>

        </section>

        <section className="products-toolbar">

          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              data-testid="product-search"
            />

          </div>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            data-testid="category-filter"
          >
            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
            data-testid="sort-products"
          >
            <option value="default">
              Sort by
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="rating">
              Rating
            </option>
          </select>

        </section>

        {filteredProducts.length > 0 ? (
          <section className="products-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </section>
        ) : (
          <div className="empty-products">

            <div className="empty-icon">
              🔍
            </div>

            <h2>No products found</h2>

            <p>
              Try changing your search or category
              filter.
            </p>

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
}

export default Products;