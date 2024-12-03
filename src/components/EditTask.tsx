import { useAppDispatch } from "../features/store";
import { deleteTask, Task, updateTask } from "../features/taskSlice";

const EditTask = ({
  data,
  type,
  setOpenModal,
}: {
  data: Task | null;
  type: "edit" | "delete";
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData);
    if (data) {
      const obj = {
        id: data.createdAt,
        ...(updatedData?.title ? { title: updatedData.title.toString() } : {}),
        ...(updatedData?.priority
          ? {
              priority:
                updatedData.priority === "0"
                  ? ("0" as "0")
                  : updatedData.priority === "1"
                  ? ("1" as "1")
                  : ("2" as "2"),
            }
          : {}),
        ...(updatedData?.dueDate
          ? { dueDate: updatedData.dueDate.toString() }
          : {}),
        ...(updatedData?.completed
          ? { completed: true }
          : { completed: false }),
        ...(updatedData?.desc ? { desc: updatedData.desc.toString() } : {}),
      } as const;
      dispatch(updateTask(obj));
    }
    setOpenModal(false);
  };

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data) {
      dispatch(deleteTask(data.createdAt));
    }
    setOpenModal(false);
  };
  if (type === "edit") {
    return (
      <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
        <div className="w-full relative h-full md:w-2/3 sm:w-[90%] sm:h-[90%] bg-white flex flex-col gap-5 rounded-lg p-4 overflow-y-auto">
          <div
            className="absolute top-4 right-4 font-sans flex items-center text-white font-semibold justify-center cursor-pointer bg-red-500 w-[30px] h-[30px] rounded-full "
            onClick={() => setOpenModal(false)}
          >
            X
          </div>
          <h1 className="text-center text-3xl">Task</h1>
          <form
            className="h-full flex flex-col gap-4 justify-between"
            onSubmit={handleUpdate}
          >
            <div className="flex flex-col gap-5 flex-wrap justify-between">
              <div className="flex flex-col">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  defaultValue={data?.title}
                  required
                  name="title"
                  className="bg-slate-50 font-sans font-thin p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Priority</label>
                <select
                  name="priority"
                  defaultValue={data?.priority}
                  id=""
                  className="bg-slate-50 font-sans font-thin p-2"
                >
                  <option value="0">High</option>
                  <option value="1">Moderate</option>
                  <option value="2">Low</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Description</label>
                <textarea
                  className="bg-slate-50 font-sans p-1"
                  defaultValue={data?.desc}
                  name="desc"
                  id=""
                  rows={2}
                  cols={20}
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Created Date</label>
                <input
                  type="text"
                  readOnly
                  defaultValue={
                    data
                      ? new Date(Number(data.createdAt)).toLocaleDateString('en-CA')
                      : "0000-00-00"
                  }
                  name="createdAt"
                  className="bg-slate-50 font-sans font-thin p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Due Date</label>
                <input
                  type="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  defaultValue={data?.dueDate}
                  name="dueDate"
                  className="bg-slate-50 w-fit font-sans font-thin p-2"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="">Completed</label>
                <input
                  type="checkbox"
                  name="completed"
                  defaultChecked={data?.completed || false}
                  className="bg-slate-50 font-sans font-thin p-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 p-2 text-xl font-sans rounded-md text-white hover:bg-blue-700"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (type === "delete") {
    return (
      <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
        <div className="relative w-[90%] sm:w-2/3 lg:w-fit h-fit bg-white flex flex-col gap-10 rounded-lg p-4">
          <div
            className="absolute top-2 right-2 font-sans flex items-center text-white font-semibold justify-center cursor-pointer bg-red-500 w-[30px] h-[30px] rounded-full "
            onClick={() => setOpenModal(false)}
          >
            X
          </div>
          <form
          onSubmit={handleDelete}
          className="p-4 flex flex-col gap-4"
        >
          <span className="text-center font-medium">
            All data will be lost. Are you sure you want to delete this task?
          </span>
          <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
            Delete
          </button>
        </form>
        </div>
      </div>
    );
  }
};

export default EditTask;
