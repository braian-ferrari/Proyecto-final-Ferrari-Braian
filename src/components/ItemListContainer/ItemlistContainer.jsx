import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import styles from "./ItemListContainer.module.css";
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id, marca } = useParams(); // Obtener marca de los parámetros de la URL
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const db = getFirestore();

      try {
        let docsRef = collection(db, "productos");

        // Aplicar filtro por categoría si está definida
        if (id) {
          docsRef = query(docsRef, where("categoryId", "==", id));
        }

        // Aplicar filtro por marca si está definida
        if (marca) {
          docsRef = query(docsRef, where("marca", "==", marca));
        }

        const querySnapshot = await getDocs(docsRef);
        setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error al obtener productos: ", error);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [id, marca]);

  if (loading) return <Loader />;

  return (
    <div className={styles.Itemliscontainer}>
      <h2 className="contentContainerTitle">{greeting}</h2>
      {products.length === 0 ? <p>No hay productos disponibles.</p> : <ItemList productos={products} />}
    </div>
  );
};

export default ItemListContainer;
