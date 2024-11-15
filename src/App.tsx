import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css"

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-white flex flex-col gap-5 rounded-lg w-full h-full md:w-2/3 lg:w-1/2 sm:w-[90%] sm:h-[90%] lg:h-4/5 p-5 overflow-hidden">
        <h1 className="text-4xl text-center font-medium">Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
