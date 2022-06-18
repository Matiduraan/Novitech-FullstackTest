import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"

export const Cuenta = () => {
    let { idCliente, idCuenta } = useParams();
    const [{ nro_cuenta, nro_cliente, saldo, tipo_de_cuenta }, setInfoCuenta] = useState({ nro_cuenta: '', nro_cliente: '', saldo: '', tipo_de_cuenta: '' });
    //console.log(idCliente, idCuenta);
    const getAccount = async () => {
        const url = `http://localhost:3001/infoCuenta?numeroDeCuenta=${encodeURI(idCuenta)}&numeroDeCliente=${encodeURI(idCliente)}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setInfoCuenta(data[0]);
    }

    useEffect(() => {
        getAccount();
    }, []);

    return (
        <>
            <h1>{tipo_de_cuenta}</h1>
            <h1>{idCuenta}</h1>
        </>
    )
}
