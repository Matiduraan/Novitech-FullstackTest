import { Link } from "react-router-dom"

export const AccountGridItem = ({ nro_cuenta, tipo_de_cuenta, nro_cliente }) => {
    return (
        <>
            <Link to={`../cuenta/${nro_cliente}/${nro_cuenta}`} className="col-md-4 account-link">
                <div className="account-wrapper">
                    <h1 className="h5 accountType w-100">{tipo_de_cuenta}</h1>
                    <h1 className="h5 accountNumber w-100">Nro: {nro_cuenta}</h1>
                </div>
            </Link>
        </>
    )
}
