import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const App = () => {

    const producto = { titulo: "Producto 1" }

    return (
        <>
            <Header producto={producto} saludo="bienvenidoscd" />
            <Footer />
            <Main />
        </>
    )
}

export default App;