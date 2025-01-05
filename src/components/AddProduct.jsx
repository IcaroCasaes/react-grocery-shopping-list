import { useState } from "react";
import Input from "./Input";

function AddProduct({ onAddProductSubmit }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Type the product name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Type the quantity"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Type the product description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !quantity.trim() || !description.trim()) {
            return alert(
              "Por favor, preencha todos os campos antes de adicionar um produto."
            );
          }

          onAddProductSubmit(title, quantity, description);
          setTitle("");
          setQuantity("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddProduct;
