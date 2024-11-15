import { useAppDispatch } from "../features/store"
import { addTask } from "../features/taskSlice"


const TaskForm = () => {
    const dispatch = useAppDispatch()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const task = {
            priority: data.priority === "0" ? "0" : data.priority === "1" ? "1" : "2",
            completed: data.completed ? true : false,
            createdAt: Date.now().toString(),
            title: data.title.toString()
        } as const
        dispatch(addTask(task))
        e.currentTarget.reset()
    }
  return (
    <div className='flex flex-col gap-2'>
        <h2 className="font-sans text text-lg font-semibold text-gray-700">CREATE TASK</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex gap-5 flex-wrap justify-between">
            <div className="flex flex-col">
                <label htmlFor="">Title</label>
                <input type="text" required name="title" className="bg-slate-50 font-sans font-thin p-2" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Priority</label>
                <select name="priority" id="" className="bg-slate-50 font-sans font-thin p-2">
                    <option value="0">High</option>
                    <option value="1">Moderate</option>
                    <option value="2">Low</option>
                </select>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="">Completed</label>
                <input type="checkbox" name="completed" className="bg-slate-50 font-sans font-thin p-2" />
            </div>
            </div>
            <button type="submit" className="bg-blue-600 p-2 text-xl font-sans rounded-md text-white hover:bg-blue-700">SUBMIT</button>
        </form>
    </div>
  )
}

export default TaskForm