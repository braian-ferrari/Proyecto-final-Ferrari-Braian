import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import styles from './ItemCart.module.css'

const ItemCart = ({ item }) => {
  const { deleteItemCart } = useContext(CartContext);

  return (
    <div className={`${styles.containterItemCart}`}>
      <h3>{item.nombre}</h3>
      <img src={item.imagen} alt={item.nombre} className={`${styles.imagenItemCart}`}/>
      <p className>Precio: {item.precio}</p>
      <p className>Cantidad: {item.cuantity}</p>
      <button 
        type="button" 
        className="btn btn-info" 
        onClick={() => deleteItemCart(item.id)}
      >
        Borrar
      </button>
    </div>
  );
}

export default ItemCart;
