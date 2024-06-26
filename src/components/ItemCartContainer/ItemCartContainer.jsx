import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import ItemCart from '../ItemCart/Itemcart';
import { useNavigate } from 'react-router-dom';
import EmptyItems from '../EmptyItems/EmptyItems'

const ItemCartContainer = () => {
  const { cart, totalPriceCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className='cart-container'>
      {cart.length === 0 ? (
        <EmptyItems message="Carrito vacío" />
      ) : (
        <>
          <div className='cart-items'>
            {cart.map(item => <ItemCart key={item.id} item={item} />)}
          </div>
          <div className='checkout'>
            <p>Total: {totalPriceCart}</p>
            <button type="button" className='btn btn-info' onClick={() => navigate("/checkout")}>Finalizar compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCartContainer;
