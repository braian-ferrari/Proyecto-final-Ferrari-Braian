import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../CartWidget/CartWidget.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const [count,setCount]=useState(0);
    return (
        <div>
            <button type="button" className={`btn btn-primary ${styles.CartWidget}`}>{count}<Link to='/Cart'><i className={`bi bi-cart2`}></i></Link></button>

        </div>
    )
}

export default CartWidget