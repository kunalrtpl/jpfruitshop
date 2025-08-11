"use client";

import { useState, useMemo, FC } from "react";
import { Product } from "@/types/Product";
import { Squares2X2Icon, Bars3Icon } from "@heroicons/react/24/solid";

interface Props {
  products: Product[];
}

const ProductList: FC<Props> = ({ products }) => {
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.product_name.toLowerCase().includes(q) ||
        p.category.name.toLowerCase().includes(q)
    );
  }, [products, query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-green-800 drop-shadow-md select-none">
        🍎 Fresh Fruits
      </h2>

      {/* Search and toggle */}
      <div className="mb-6 max-w-md mx-auto flex justify-between items-center space-x-4">
        <input
          type="search"
          className="flex-grow px-5 py-3 rounded-full border border-green-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400 placeholder-green-600 text-green-900 font-semibold transition"
          placeholder="Search by fruit name or category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search fruits"
        />

        <div className="flex space-x-2">
          {/* Grid Icon */}
          <button
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
            className={`p-2 rounded-full transition-colors duration-300 ${
              viewMode === "grid"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            <Squares2X2Icon className="w-6 h-6" />
          </button>

          {/* List Icon */}
          <button
            onClick={() => setViewMode("list")}
            aria-label="List view"
            className={`p-2 rounded-full transition-colors duration-300 ${
              viewMode === "list"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-red-600 font-semibold text-lg">
          No fruits found matching your search.
        </p>
      ) : viewMode === "grid" ? (
        // GRID VIEW
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="relative bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center cursor-pointer hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Juice splash behind card */}
              <span
                aria-hidden="true"
                className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-yellow-300 via-pink-400 to-red-400 rounded-full opacity-30 blur-3xl animate-juice-pulse"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-12 -right-12 w-52 h-52 bg-gradient-to-br from-green-300 via-lime-400 to-yellow-400 rounded-full opacity-20 blur-3xl animate-juice-pulse animation-delay-2000"
              />

              <div className="w-full h-44 overflow-hidden rounded-2xl mb-5 shadow-md">
                <img
                  src={`/images/fruits/${p.image}`}
                  alt={p.product_name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              <h3
                className="text-xl font-extrabold text-green-900 mb-1 truncate max-w-full text-center"
                title={p.product_name}
              >
                {p.product_name}
              </h3>
              <p className="text-green-700 font-semibold mb-3 capitalize">
                {p.category.name}
              </p>

              <p className="text-green-900 font-bold text-2xl">
                Rs.{p.final_price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        // LIST VIEW
        <div className="space-y-6 max-w-3xl mx-auto">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="flex items-center bg-white rounded-3xl shadow-xl p-4 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={`/images/fruits/${p.image}`}
                alt={p.product_name}
                className="w-28 h-28 object-cover rounded-2xl flex-shrink-0"
                loading="lazy"
                draggable={false}
              />
              <div className="ml-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold text-green-900">
                  {p.product_name}
                </h3>
                <p className="text-green-700 font-semibold capitalize mb-2">
                  {p.category.name}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {p.short_description || "No description available."}
                </p>
                <p className="text-green-900 font-bold text-2xl mt-auto">
                  Rs.{p.final_price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Juice pulse animation keyframes */}
      <style jsx>{`
        @keyframes juicePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }
        .animate-juice-pulse {
          animation: juicePulse 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* For line clamp on description */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
