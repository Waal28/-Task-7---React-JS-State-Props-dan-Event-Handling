import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const Counter = (props) => {
  return (
    <div>
      <h2 className={props.count % 2 === 0 ? styles.genap : styles.ganjil}>
        Count : {props.count}
      </h2>
      <br />
      {props.tombol ? (
        <button onClick={props.handleKurang}>kurang</button>
      ) : (
        <button onClick={props.handleKurang} disabled>
          kurang
        </button>
      )}

      <button onClick={props.handleTambah}>Tambah</button>
      <br />
      <button onClick={props.handleReset}>Reset</button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  count: PropTypes.string,
  handleTambah: PropTypes.func,
  handleKurang: PropTypes.func,
  handleReset: PropTypes.func,
  tombol: PropTypes.bool,
};
