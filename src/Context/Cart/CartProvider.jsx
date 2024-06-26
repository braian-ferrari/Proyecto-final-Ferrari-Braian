import { useEffect, useState } from "react"
import CartContext from "../CartContext"

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalPriceCart, setTotalPriceCart] = useState(0)
    const [totalCuantityCart, setTotalCuantityCart] = useState(0)

    useEffect(() => {
        setTotalPriceCart(cart.reduce((acc, item) => acc + item.price * item.cuantity, 0))
        setTotalCuantityCart(cart.reduce((acc, item) => acc + item.cuantity, 0))
    }, [cart])

    const addItemCart = (producto) => {
        const itemExists = cart.find(item => item.id === producto.id)
        if (itemExists) {
            setCart(cart.map(item => {
                if (item.id === producto.id) {
                    return {
                        ...item, 
                        cuantity: item.cuantity + producto.cuantity
                    }
                }
                return item
            }))
            return
        }
        setCart(cart => ([...cart, producto]))
    }

    const deleteItemCart = (id) => {
        setCart(cart.filter(item => item.id != id))
    }

    const clearCart = () => {
        setCart([])
    }



    return (
        <CartContext.Provider value={{ cart, totalPriceCart, totalCuantityCart, addItemCart, deleteItemCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider