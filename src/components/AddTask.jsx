import { useState } from "react";
import Input from "./Input";


function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 bg-violet-950 p-6 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite sua tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //Verificar se o titulo e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição da tarefa.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-violet-700 text-white px-4 py-2 font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
