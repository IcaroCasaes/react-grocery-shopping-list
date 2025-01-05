import { useEffect, useState } from "react";
import { v4 } from "uuid";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import PageTitle from "./components/PageTitle";

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    //Criar a função como "async function fetchProducts() {...}" daria certo da mesma forma:
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=4",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProducts(data);
    };
    //É possível pegar os itens da lista por meio de uma api ativando a chamada abaixo
    //fetchProducts();
  }, []);

  function onProductClick(productId) {
    const newProducts = products.map((products) => {
      if (products.id === productId) {
        return { ...products, isPurchased: !products.isPurchased };
      }

      return products;
    });
    setProducts(newProducts);
  }

  function onDeleteProductClick(productId) {
    const newProducts = products.filter((product) => product.id != productId);
    setProducts(newProducts);
  }

  function onAddProductSubmit(title, amount, description) {
    const newProduct = {
      id: v4(),
      title,
      description,
      amount,
      isPurchased: false,
    };
    setProducts([...products, newProduct]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <PageTitle>Shopping List</PageTitle>
        <AddProduct onAddProductSubmit={onAddProductSubmit} />
        <Products
          products={products}
          onProductClick={onProductClick}
          onDeleteProductClick={onDeleteProductClick}
        />
      </div>
    </div>
  );
}

export default App;
