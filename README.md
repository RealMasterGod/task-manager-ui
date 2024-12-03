# Task Manager WebApp
Demo link: https://task-manager-ui-git-main-realmastergods-projects.vercel.app/

# Table of Content

1. About The App
2. Technologies
3. Prerequisites
4. Setup
5. Status
6. Screenshots

# 1. About The App
Task Manager is a simple application to manage and list your tasks.
## Functionality
- Create tasks with a title and a priority (high, moderate, low).
- Priority is marked by a circle with color red (high), yellow (moderate), or green (low).
- Delete tasks.
- Search for tasks from list of tasks (It looks for a title match).
- Sort tasks list (newest by time of creation of task, ascending priority i.e low < moderate < high, descending priority i.e high < moderate < low).
- Mark tasks as completed (if a task is marked completed it will appear with its title lined through).
- Animation for loading task list is there (added forcefully using setTimeout as there is no real load time since data doesn't actually come from api).
- This application is responsive for desktops and mobile devices.
# 2. Technologies


## React + TS

### To create your own react + vite + TS app run this command:
```bash
npm create vite@latest app-name -- --template react-ts
```
Or you may refer to https://vitejs.dev/guide/ for more details.

## Redux Toolkit

I have use Redux for state management like managing creation and deletion of tasks etc and for persisting the tasks in local storage using redux persist.

Add redux in your project
```bash
npm i react-redux @reduxjs/toolkit
```

Add redux persist in your project
```bash
npm i redux-persist
```
## TailwindCSS
Since this is a small application I used tailwindcss as it helps build custom ui faster.

Add tailwindcss in your react + vite projects or visit the offical site to know more https://tailwindcss.com/

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add paths to tailwind.config.js
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add these directives in your index.css or global.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now just run your application to use tailwindcss.

## Material UI Icons

I have used mui icons. Visit the official site to know more about mui: https://mui.com/

# 3. Prerequisites
## Install Node Package Manager
Refer to https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

# 4. Setup Locally
- Clone the repository or download as zip.
- Go to the cloned folder on your local machine.
- Open terminal and run the following command.
  ```bash
  npm install && npm run dev
  ```
- After a few minutes you should see a url in your terminal just open it in your browser (usually its localhost:5173).
# 5. Status
This project  is complete.

# 6. Screenshots

Loading Animation Screenshot
![tm1](https://github.com/user-attachments/assets/788d7d59-3acc-45a7-879e-9ec4cf0d1d76)

Screenshot with Tasks
![tm](https://github.com/user-attachments/assets/a7e70075-d396-4993-82b9-02cc21472b08)




