import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import ItemListContainer from '../ItemListContainer/ItemlistContainer'
import Nosotros from '../Nosotros/Nosotros'

const Home = () => {
    return (
        <div>
            <Carrousel />
            <Nosotros />
            <ItemListContainer />

        </div>
    )
}

export default Home