import { createContext , useState } from "react"




export const context = createContext()

const { Provider } = context


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const agregarProducto = (producto,cantidad) => {
        isInCart()
    }

    const eliminarProducto = (id) => {}

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidad(0)
    }

    const isInCart = (id) => {}

    const valorContexto = { 
        carrito,
        cantidad,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito
     }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider