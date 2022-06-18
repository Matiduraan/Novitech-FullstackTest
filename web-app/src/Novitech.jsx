import { Navbar } from "./components/Navbar"
import { AppRouter } from "./router/AppRouter"

export const Novitech = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <AppRouter />
            </div>
        </>
    )
}
