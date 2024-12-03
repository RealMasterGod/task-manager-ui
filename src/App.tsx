import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css"

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-white flex flex-col gap-5 rounded-lg w-full h-full sm:w-[90%] sm:h-[99%] md:h-[90%] xl:w-2/3 2xl:w-1/2 p-5 overflow-hidden">
        <h1 className="text-4xl text-center font-medium">Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
