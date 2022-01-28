import React, { useState } from "react";

const ShopCartContext = React.createContext([])

const CartFuncion = ({ children }) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cant, setCant] = useState(0)

    const onAdd = (producto, qty) => {
        const itemExiste = cart.find(item => item.title === producto.title)
        setCant(cant + qty)
        if (!itemExiste) {
            setCart([...cart, { id: producto.id, title: producto.title, pictureUrl: producto.pictureUrl, price: producto.price, cantidad: qty, subTotal: (producto.price * qty) }])
            setTotal(total + (producto.price * qty))
        } else {
            const cartAux = cart.map((item) => {
                if (item.title === producto.title) {
                    item.cantidad += qty;
                    item.subTotal += (producto.price * qty)
                    setTotal(total + (producto.price * qty))
                }
                return item;
            })
            setCart(cartAux)
        }
    }

    const changeQty = (changeBool, cantidadArg, title) => {
        if (changeBool) {
            const cartAuxTwo = cart.map((producto) => {
                if (producto.title === title) {
                    producto.cantidad += 1;
                    producto.subTotal += (producto.price * 1)
                    setTotal(total + producto.price * 1)
                }
                return producto;
            })
            setCant(cant + 1)
            setCart(cartAuxTwo);
        } else if (cantidadArg === 1) {
            removeItem(title)
        } else {
            const cartAuxTwo = cart.map((producto) => {
                if (producto.title === title) {
                    producto.cantidad -= 1;
                    producto.subTotal -= (producto.price)
                    setTotal(total - producto.price)
                }
                return producto;
            })
            setCant(cant - 1)
            setCart(cartAuxTwo);
        }
    }

    const removeItem = (title) => {
        setCart(cart.filter(it => it.title !== title))
        setTotal(total - ((cart.find(it => it.title === title).subTotal)))
        setCant(cant - ((cart.find(it => it.title === title).cantidad)))
    }

    const clear = () => {
        setCart([]);
        setCant(0);
        setTotal(0);
    }

    return <ShopCartContext.Provider value={{ cart, total, cant, onAdd, clear, removeItem, changeQty }}>
        {children}
    </ShopCartContext.Provider>
}

export { CartFuncion, ShopCartContext }