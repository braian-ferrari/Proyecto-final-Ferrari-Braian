import React from 'react'
import styles from './Nosotros.module.css'
import { Link } from 'react-router-dom'

const Nosotros = () => {
    return (
        <div>
            <div className={`${styles.Nosotros}`}>
                <h1>Nosotros</h1>
                <Link to='/Nosotros' className={`${styles.Link}`} ><p>Somos una empresa apasionada por el baloncesto y comprometida con ofrecer a nuestros clientes la mejor selección de zapatillas, indumentaria y accesorios de la más alta calidad. En cada paso de nuestro camino, nos esforzamos por brindar una experiencia excepcional de compra que refleje nuestra dedicación a este deporte que amamos.</p></Link>
            </div>
        </div>
    )
}

export default Nosotros