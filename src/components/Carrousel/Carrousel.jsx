import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Carrousel.module.css'


const Carrousel = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='/Imagenes/adidas.png.webp' className={`d-block w-80 img-fluid mx-auto ${styles.imagenes}`} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src='/Imagenes/nike.png' className= {`d-block w-80 img-fluid mx-auto ${styles.imagenes}`} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src='/Imagenes/jordan.webp' className={`d-block w-80 img-fluid mx-auto ${styles.imagenes}`} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src='/Imagenes/underarmour.png' className={`d-block w-80 img-fluid mx-auto ${styles.imagenes}`} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrousel