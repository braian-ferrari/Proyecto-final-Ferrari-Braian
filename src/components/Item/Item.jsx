import React from 'react'
import styles from "./Item.module.css"
import { Link,useNavigate } from 'react-router-dom';
const Item = ({ producto }) => {
    const navigate = useNavigate()
    return (

        <div className={`card-group m-5 p-5 ${styles.Items}`}>
        <div className={`card ${styles.Items} `}>
            <img src={producto.imagen} className="card-img-top img-fluid" alt="" />
            <div className="card-body" >
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text"><strong>{'$'+producto.precio}</strong></p>
                <p>{producto.descripcion}</p>
                <button type="button" className="btn btn-info" onClick={()=>navigate("/detail/" + producto.id)}>Detalle</button>

            </div>
        </div>
        </div>
    )
}

export default Item