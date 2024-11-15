import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    createdAt: string;
    title: string;
    priority: "0" | "1" | "2";
    completed: boolean;
}

interface TaskState {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state,action:PayloadAction<Task>) => {
            state.tasks = [action.payload, ...state.tasks]
        },
        updateTask: (state,action:PayloadAction<string>) => {
            state.tasks = state.tasks.map((task):Task => {
                if(task.createdAt === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }

                return task
            })
        },
        deleteTask: (state,action:PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.createdAt !== action.payload)
        }
    }
})

export default taskSlice.reducer
export const {addTask, updateTask, deleteTask} = taskSlice.actions