import { useState } from "react";
import Input from "./Input";

function AddProduct({ onAddProductSubmit }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o nome do produto"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a quantidade"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição do produto"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !amount.trim() || !description.trim()) {
            return alert(
              "Por favor, preencha todos os campos antes de adicionar um produto."
            );
          }

          onAddProductSubmit(title, amount, description);
          setTitle("");
          setAmount("");
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
