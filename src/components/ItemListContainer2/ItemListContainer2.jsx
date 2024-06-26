import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import styles from "./ItemListContainer2.module.css";
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";

const ItemListContainer2 = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const db = getFirestore();

            try {
                let docsRef = collection(db, "productos");

                if (categoryId) {
                    docsRef = query(docsRef, where("categoryId", "==", categoryId.toLowerCase()));
                }

                const querySnapshot = await getDocs(docsRef);
                setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error al obtener productos: ", error);
            }

            setLoading(false);
        };

        fetchProducts();
    }, [categoryId]);

    if (loading) return <Loader />;

    return (
        <div className={styles.Itemliscontainer}>
            <h2>{greeting}</h2>
            {products.length === 0 ? <p>No hay productos disponibles.</p> : <ItemList productos={products} />}
        </div>
    );
};

export default ItemListContainer2;


