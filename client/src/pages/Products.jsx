import { useState, useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { products, searchQuery } = useContext(AppContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [animate, setAnimate] = useState(false);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      const query = searchQuery.toLowerCase();

      const result = products.filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(query);

        const matchesCategory =
          selectedCategory === "all" ||
          product.category === selectedCategory;

        const matchesPrice =
          product.offerPrice >= priceRange[0] &&
          product.offerPrice <= priceRange[1];

        return (
          product.inStock &&
          matchesSearch &&
          matchesCategory &&
          matchesPrice
        );
      });

      setFilteredProducts(result);
      setAnimate(true);
    }, 120); // animation sync

    return () => clearTimeout(timeout);
  }, [products, searchQuery, selectedCategory, priceRange]);

  return (
    <section className="mt-20 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-3xl lg:text-4xl font-semibold">
          All Products
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Filter & find the right healthcare products
        </p>
      </div>

      <div className="flex gap-10">
        {/* 🧭 Left Filters */}
        <aside
          className="hidden md:block w-64 sticky top-24 h-fit
          p-6 rounded-2xl border border-gray-200
          bg-white/70 backdrop-blur-xl shadow-sm"
        >
          <h3 className="font-semibold mb-6">Filters</h3>

          {/* Category */}
          <div className="mb-8">
            <p className="text-xs text-gray-500 mb-2">Category</p>
            <div className="flex flex-col gap-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left px-3 py-2 rounded-lg text-sm
                  transition-all
                  ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white shadow"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <p className="text-xs text-gray-500 mb-2">Price Range</p>
            <div className="flex gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-full px-3 py-2 text-sm rounded-lg
                border focus:ring-2 focus:ring-green-500"
                placeholder="Min ₹"
              />
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full px-3 py-2 text-sm rounded-lg
                border focus:ring-2 focus:ring-green-500"
                placeholder="Max ₹"
              />
            </div>
          </div>

          {/* Clear */}
          <button
            onClick={() => {
              setSelectedCategory("all");
              setPriceRange([0, 10000]);
            }}
            className="w-full py-2 rounded-full border
            text-sm hover:bg-gray-100 transition"
          >
            Clear Filters
          </button>
        </aside>

        {/* 🛍 Products */}
        <div className="flex-1">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            lg:grid-cols-4 gap-5 transition-all duration-300
            ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="transition-transform duration-300
                  hover:-translate-y-1"
                >
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-500">
                No products match your filters
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
