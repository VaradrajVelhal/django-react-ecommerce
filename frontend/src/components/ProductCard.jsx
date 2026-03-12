import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={`${BASEURL}${product.image}`}
            alt={product.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Price Badge */}
          <span className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-full shadow">
            ₹ {product.price}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate mb-2">
            {product.name}
          </h2>

          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {product.description}
          </p>

          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
