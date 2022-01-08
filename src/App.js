import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "task",
      day: "date",
      reminder: false,
    },
    {
      id: 2,
      text: "task",
      day: "date",
      reminder: false,
    },
    {
      id: 3,
      text: "task",
      day: "date",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
