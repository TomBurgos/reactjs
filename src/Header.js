import Nav from "./Nav"

const Header = (parametros) => {
    parametros.producto.titulo = "producto 2"
    console.log(parametros.producto.titulo)
    return (
        <header>
            <h1>Tienda</h1>
            <Nav />
        </header>)

}

export default Header;