# 📝 TypeScript TODO App

A clean, minimalist Todo List application built with **TypeScript**, **Vite**, and the **UUID** library. This app provides a simple interface for adding, completing, and saving tasks using the browser's local storage.

---

## 🚀 Features

- Add new tasks with a title
- Mark tasks as completed
- Persist tasks in browser `localStorage`
- Unique task IDs using `uuid`
- Modern, lightweight setup with Vite and TypeScript

---

## 📸 Demo

> 📌 *Live demo link coming soon* (you can host with Vercel, Netlify, or GitHub Pages)

---

## 🛠️ Tech Stack

- **TypeScript**
- **Vite**
- **UUID**
- **HTML5 & DOM APIs**
- **localStorage**

---

## 📁 Project Structure

```
project-root/
├── index.html          # HTML markup
├── package.json        # Project metadata and scripts
├── .gitignore          # Ignored files
└── src/
    └── main.ts         # Core application logic
```

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install
```

---

### Start Development Server

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

### Build for Production

```bash
npm run build
```

Build output will be placed in the `dist/` directory.

---

### Preview Production Build

```bash
npm run preview
```

---

## 🔐 LocalStorage Example

Your tasks are saved in the browser with this key:

```ts
localStorage.setItem("Tasks", JSON.stringify(tasks));
```

---

## 🧪 Sample Task Object

```ts
{
  id: "c92b2b12-fae5-4c2e-81b5-845dcb6c5893",
  title: "Finish TypeScript project",
  completed: false,
  createdAt: "2025-08-07T12:34:56.789Z"
}
```

---

## 🧑‍💻 Author

**Mostafa-Ghoniem**  
[GitHub](https://github.com/Mostafaghoniem14) • [LinkedIn](https://www.linkedin.com/in/mostafa-ghoniem-3551aa35b)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

> Clean code. Simple UI. Built with modern tools.
