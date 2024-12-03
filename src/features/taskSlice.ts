import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    createdAt: string;
    dueDate?: string;
    title: string;
    priority: "0" | "1" | "2";
    desc?: string;
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
        updateTask: (state,action:PayloadAction<{id: string, title?: string, desc?: string, priority?: "0" | "1" | "2", dueDate?: string, completed: boolean }>) => {
            state.tasks = state.tasks.map((task):Task => {
                if(task.createdAt === action.payload.id) {
                    return {
                        ...task,
                        completed: action.payload.completed,
                        ...action.payload?.title ? {title: action.payload.title} : {},
                        ...action.payload?.priority ? {priority: action.payload.priority} : {},
                        ...action.payload?.dueDate ? {dueDate: action.payload.dueDate} : {},
                        ...action.payload?.desc ? {desc: action.payload.desc} : {},
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