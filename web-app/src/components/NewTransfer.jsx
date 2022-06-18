import { useEffect, useState } from "react";
import axios from 'axios';

export const NewTransfer = () => {
    const [infoCuentas, setInfoCuentas] = useState([{ nro_cuenta: '', tipo_de_cuenta: '' }])
    const idCliente = 1234;

    const getAccounts = () => {
        axios.get(`http://localhost:3001/cuentas?numeroDeCliente=${encodeURI(idCliente)}`)
            .then(res => {
                setInfoCuentas(res.data);
            })
    }

    useEffect(() => {
        getAccounts();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const json = {
            nro_cliente: 1234,
            cuenta_origen: event.target.cuentaOrigen.value,
            cuenta_destino: event.target.cuentaDestino.value,
            monto: event.target.monto.value
        };
        axios.post(`http://localhost:3001/crearTransaccion`, { json })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="cuentaOrigen">Cuenta de origen</label>
                <select name="cuentaOrigen" id="cuentaOrigen" defaultValue={'default'} className="form-control">
                    <option value="default" disabled>Tipo de cuenta - Numero de cuenta</option>
                    {infoCuentas.map(cuenta => {
                        return <option value={cuenta.nro_cuenta}>{cuenta.tipo_de_cuenta} - {cuenta.nro_cuenta}</option>
                    })}
                </select>
                <label htmlFor="cuentaDestino">Cuenta de destino</label>
                <select name="cuentaDestino" id="cuentaDestino" defaultValue={'default'} className="form-control">
                    <option value="default" disabled>Tipo de cuenta - Numero de cuenta</option>
                    {infoCuentas.map(cuenta => {
                        return <option value={cuenta.nro_cuenta}>{cuenta.tipo_de_cuenta} - {cuenta.nro_cuenta}</option>
                    })}
                </select>
                <label htmlFor="monto">Monto</label>
                <input type="number" name="monto" id="monto" className="form-control" />
                <button type="submit" className="btn btn-primary">Transferir</button>
            </form>
        </>
    )
}
