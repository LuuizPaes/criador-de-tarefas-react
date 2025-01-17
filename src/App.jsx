import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*useEffect(() => {
    const fetchTasks = async () => {
      //Chamar api
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      //Pegar os dados que ela retorna
      const data = await response.json();

      //armazenar/persistir esses dados no state
      setTasks(data)
    };
    //se quiser você pode pegar uma api para pegar as tarefas
    //fetchTasks();
  }, []);*/

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Não preciso atualizar
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }
  return (
    <div className="w-screen h-screen bg-violet-700 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
