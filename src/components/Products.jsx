import { CheckIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Products({ products, onProductClick, onDeleteProductClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(product) {
    const query = new URLSearchParams();
    query.set("title", product.title);
    query.set("description", product.description);
    query.set("quantity", product.quantity);
    navigate(`/product?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {products.map((product) => (
        <li key={product.id} className="flex gap-2">
          <button
            onClick={() => onProductClick(product.id)}
            className={`bg-slate-400 text-left w-full flex items-center text-white p-2 rounded-md ${
              product.isPurchased && "line-through"
            }`}
          >
            {product.isPurchased && <CheckIcon />}
            {product.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(product)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteProductClick(product.id)}>
            <Trash2 />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Products;
