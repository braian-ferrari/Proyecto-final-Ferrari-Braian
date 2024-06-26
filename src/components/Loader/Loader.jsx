import React from 'react';
import 'animate.css';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={`animate__animated animate__bounce animate__infinite ${styles.Loader}`}>🏀</div>
  );
};

export default Loader;
