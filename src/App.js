import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import TestEventos from "./TestEventos"
import CustomProvider from "./CustomProvider"

const App = () => {

    const saludo = "Bienvenidos"

    return (
        <BrowserRouter>
            <CustomProvider>
                <Header saludo={saludo} />
                <TestEventos/>
                <Main/>
                <Footer saludo={saludo} />
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App;