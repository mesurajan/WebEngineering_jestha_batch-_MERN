import { useParams } from "react-router-dom";
import products from "../../Data/Products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <>
      <div>
        <h1>Product Details page</h1>
        <p>Product ID: {product.id}</p>
        <p>Product Name: {product.name}</p>
      </div>
    </>
  );
}

export default ProductDetails;
