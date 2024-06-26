import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const db = getFirestore();

            try {
                const docRef = doc(db, 'productos', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log(`No se encontró ningún producto con el id ${id}`);
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
                // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
            }

            setLoading(false);
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div>
            <ItemDetail key={product.id} producto={product} /> {/* Corregir aquí: 'producto' a 'product' */}
        </div>
    );
};

export default ItemDetailContainer;
