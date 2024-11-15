import TimerIcon from "@mui/icons-material/Timer";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { useAppDispatch, useAppSelector } from "../features/store";
import { deleteTask, Task, updateTask } from "../features/taskSlice";
import { useEffect, useState } from "react";

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<Task[]>(tasks);
  const [loading, setLoading] = useState<boolean>(true);
  const len = Math.floor((window.innerHeight - 281) / 28)
  console.log(len)
  const [searchText, setSearchText] = useState<null | string>(null);
  const [sort, setSort] = useState<string>("new");
  useEffect(() => {
    setLoading(true);
    var temp: Task[] = [...tasks];
    if (searchText) {
      temp = temp.filter((task) => {
        if (task.title.toLowerCase().match(searchText.toLocaleLowerCase())) {
          return task;
        }
      });
    }
    temp.sort((a, b) => sortFunc(a, b, sort));
    setData(temp);
    // setLoading(false)
    setTimeout(() =>setLoading(false),200)
    // console.log("hello")
    // console.log(tasks)
  }, [searchText, sort, tasks]);

  // console.log(data)

  const sortFunc = (a: Task, b: Task, type: string): number => {
    if (type === "new") {
      return a.createdAt > b.createdAt ? -1 : 1;
    } else if (type === "pasc") {
      return a.priority > b.priority ? -1 : 1;
    } else {
      return a.priority > b.priority ? 1 : -1;
    }
  };
  // console.log(tasks)
  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <h2 className="font-sans text text-lg font-semibold text-gray-700">
        ALL TASKS
      </h2>
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-200 px-2 rounded-full"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
        />
        <div className="flex gap-2 items-center">
          <label htmlFor="">Sort By:</label>
          <select
            name=""
            id=""
            className="bg-blue-200 font-sans text-sm p-1"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSort(e.target.value)
            }
          >
            <option value="new">Newest</option>
            <option value="pasc">Priority (ASC)</option>
            <option value="pdsc">Priority (DSC)</option>
          </select>
        </div>
      </div>
      {!loading && data.length < 1 && <div className="text-center text-gray-500">Task list is empty.</div>}
      {loading &&
        [...Array(data.length > 0 ? data.length : len-5 )].map((i) => (
          <div key={i} className="flex flex-col gap-2 ">
            <div className="bg-slate-200 min-h-[44px] w-full task flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center px-2">
                <div className="h-[10px] w-[10px] rounded-full bg-slate-400"></div>
                <span className="h-[15px] w-[100px] bg-slate-400"></span>
              </div>
              <div className="flex gap-2 px-2">
                <div className="h-[15px] w-[15px] bg-slate-400"></div>
                <div className="h-[15px] w-[15px] bg-slate-400"></div>
              </div>
            </div>
          </div>
        ))}
      <div className="flex flex-col gap-3 overflow-y-auto">
        {!loading && data.map((i) => (
          <div className="p-2 bg-slate-100" key={i.createdAt}>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center">
                <div
                  className={`text-[10px] font-sans w-[10px] h-[10px] text-white rounded-full flex items-center justify-center ${
                    i.priority === "0"
                      ? "bg-red-500"
                      : i.priority === "1"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                </div>
                <span
                  className={`text-xl font-medium ${
                    i.completed && "line-through"
                  }`}
                >
                  {i.title}
                </span>
              </div>
              <div className="flex gap-2">
                <div
                  className="text-red-500 cursor-pointer"
                  onClick={() => dispatch(deleteTask(i.createdAt))}
                >
                  <DeleteOutlinedIcon />
                </div>
                {!i.completed ? (
                  <div
                    className="text-slate-500 cursor-pointer"
                    onClick={() => dispatch(updateTask(i.createdAt))}
                  >
                    <TimerIcon />
                  </div>
                ) : (
                  <div
                    className="text-green-500 cursor-pointer"
                    onClick={() => dispatch(updateTask(i.createdAt))}
                  >
                    <CheckCircleOutlineOutlinedIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
