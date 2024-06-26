// ItemDetail.jsx
import React, { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext';
import Count from '../Count/Count';
import { useNavigate } from 'react-router-dom';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ producto }) => {
  const [count, setCount] = useState(1);
  const { cart, addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addItem = () => {
    addItemCart({ ...producto, quantity: count });
    navigate("/cart");
  };

  return (
    <div className={`${styles.ContainerItemDetail}`}>
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} className={`${styles.imagenes}`} />
      <p>{producto.descripcion}</p>
      <Count count={count} handleCount={setCount} stock={producto.stock} />
      <button type="button" className={`btn btn-info ${styles.buttonCarrito}`} onClick={addItem}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetail;
