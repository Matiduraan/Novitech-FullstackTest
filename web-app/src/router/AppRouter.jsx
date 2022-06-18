import { Routes, Route, Navigate } from "react-router-dom"
import { Cuenta } from "../pages/Cuenta"
import { MisCuentas } from "../pages/MisCuentas"
import { MisTransferencias } from "../pages/MisTransferencias"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="misCuentas" element={<MisCuentas />} />
                <Route path="transferencias" element={<MisTransferencias />} />
                <Route path="cuenta/:idCliente/:idCuenta" element={<Cuenta />} />

                <Route path="/" element={<Navigate to="/misCuentas" />} />
            </Routes>
        </>
    )
}
