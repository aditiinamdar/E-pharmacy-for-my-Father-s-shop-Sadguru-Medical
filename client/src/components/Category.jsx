import { useContext } from "react";
import { categories } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Category = () => {
  const { navigate } = useContext(AppContext);

  return (
    <section className="mt-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Shop by Category
        </h2>
        <p className="text-sm text-gray-500 mt-2 sm:mt-0">
          Essentials curated for your health
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-7">
        {categories.map((category) => (
          <div
            key={category.path}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              window.scrollTo(0, 0);
            }}
            className="group cursor-pointer relative rounded-3xl p-6
            flex flex-col items-center justify-center
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-2xl"
            style={{
              background: `linear-gradient(145deg, ${category.bgColor}, #ffffff)`
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0
             group-hover:opacity-100 transition
             bg-linear-to-br from-white/40 to-transparent pointer-events-none" />

            {/* Icon */}
            <div className="relative z-10 bg-white/80 backdrop-blur
             rounded-2xl p-4 shadow-md mb-4
             transition-transform duration-300 group-hover:scale-110">
              <img
                src={category.image}
                alt={category.text}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Text */}
            <p className="relative z-10 text-sm md:text-base
             font-semibold text-gray-800 text-center tracking-wide">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
