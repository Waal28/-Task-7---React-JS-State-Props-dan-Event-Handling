import { useState } from "react";
import styles from "./App.module.css";
import TodoList from "./Task7/Productzilla_reactjs_state_props_event_1";
import Counter from "./Task7/Productzilla_reactjs_state_props_event_2";

const todos = [
  {
    id: 1,
    title: "Belajar React",
    desc: "Belajar React Hooks, Component,Props,State,Lifecycle",
    completed: false,
  },
  {
    id: 2,
    title: "Membuat Aplikasi React",
    desc: "Membuat aplikasi Todo List",
    completed: true,
  },
  {
    id: 3,
    title: "Memebuat Aplikasi Chat",
    desc: "Membuat aplikasi chat menggunakan react dan Firebase",
    completed: false,
  },
  {
    id: 4,
    title: "Belajar Node js",
    desc: "Belajar membuat server menggunakan node js",
    completed: false,
  },
];

function App() {
  // todolist
  const [data, setData] = useState(todos);
  const val = data.filter((d) => d.completed === false);
  const [todosVal, setTodosVal] = useState(val.length);

  const handleChange = (id) => {
    const newData = data.map((n) => {
      if (n.id === id) {
        return { ...n, completed: !n.completed };
      }
      return n;
    });
    const newVal = newData.filter((d) => d.completed === false);
    setData(newData);
    setTodosVal(newVal.length);
  };
  const handleHapus = () => {
    const newData = data.map((n) => {
      return { ...n, completed: false };
    });
    const newVal = newData.filter((d) => d.completed === false);
    setData(newData);
    setTodosVal(newVal.length);
  };

  // counter
  const [count, setCount] = useState(0);
  const [tombol, setTombol] = useState(false);

  const handleTambah = () => {
    setCount(count + 1);
    setTombol(true);
  };
  const handleKurang = () => {
    if (count <= 1) {
      setTombol(false);
    }
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
    setTombol(false);
  };

  return (
    <div className={styles.App}>
      <TodoList
        data={data}
        todosVal={todosVal}
        handleChange={handleChange}
        handleHapus={handleHapus}
      />
      <Counter
        count={count}
        handleKurang={handleKurang}
        handleTambah={handleTambah}
        handleReset={handleReset}
        tombol={tombol}
      />
    </div>
  );
}

export default App;
