import products from "../../Data/Products";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContexts";

function ProductCard() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-section">
      <h1 className="section-title">Featured Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>

            <div className="product-content">
              <h2 className="product-name">{product.name}</h2>

              <p className="product-price">${product.price}</p>

              <div className="product-actions">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="cart-btn"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => handleViewDetails(product.id)}
                  className="details-btn"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
