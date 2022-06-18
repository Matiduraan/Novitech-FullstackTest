import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { NewTransfer } from "../components/NewTransfer";

export const MisTransferencias = () => {

    const [transferencias, setTransferencias] = useState([{
        id_transferencia: 0,
        nro_cliente: 0,
        cuenta_origen: 0,
        cuenta_destino: 0,
        monto: 0,
        fecha_creacion: ''
    }]);
    const idCliente = 1234;


    const getLastTransfers = () => {
        axios.get(`http://localhost:3001/transacciones?numeroDeCliente=${encodeURI(idCliente)}`)
            .then(res => {
                setTransferencias(res.data);
            });
    }

    useEffect(() => {
        getLastTransfers();
    }, []);

    return (
        <>
            <h1 className="text-center title">Mis Transferencias</h1>
            <h4 className="text-center subtitle">Ultimas 5 transferencias</h4>

            <table className="w-100 text-center">
                <thead>
                    <th>Cuenta de origen</th>
                    <th>Cuenta de destino</th>
                    <th>Monto</th>
                    <th>Fecha de transferencia</th>
                </thead>
                <tbody>
                    {transferencias.map(transferencia => {
                        return (
                            <tr>
                                <td>{transferencia.cuenta_origen}</td>
                                <td>{transferencia.cuenta_destino}</td>
                                <td>{transferencia.monto}</td>
                                <td>{transferencia.fecha_creacion}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h2 className="text-center title" style={{ marginTop: '20px' }}>Realizar una transferencia</h2>
            {<NewTransfer />}
        </>
    )
}
