import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
  return (
    <div>
      <h2>Daftar Todos ({props.todosVal} belum selesai)</h2>
      {props.data.map((todo) => (
        <div>
          <label>
            {todo.title}-{todo.desc}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => props.handleChange(todo.id)}
            />
          </label>
        </div>
      ))}
      <button onClick={props.handleHapus}>Hapus</button>
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todosVal: PropTypes.number,
  data: PropTypes.array,
  handleChange: PropTypes.func,
};
