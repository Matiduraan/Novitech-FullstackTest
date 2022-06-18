import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AccountGrid } from "../components/AccountGrid";
import { ShowMoreButton } from "../components/ShowMoreButton";

export const MisCuentas = () => {
    const [infoCuentas, setInfoCuentas] = useState([{ nro_cuenta: '', tipo_de_cuenta: '' }]);
    const [limit, setlimit] = useState(5);
    const idCliente = 1234;

    const handleSelectorChange = (e) => {
        setlimit(e.target.value);
    }

    const getAccounts = async () => {
        axios.get(`http://localhost:3001/cuentas?numeroDeCliente=${encodeURI(idCliente)}`)
            .then(res => {
                setInfoCuentas(res.data);
            })
    }

    useEffect(() => {
        getAccounts();
    }, []);

    return (
        <>
            <h3 className="text-center subtitle">Consulta de saldo</h3>
            <h1 className="text-center title">Selecciona la cuenta a consultar</h1>
            <select name="" id="limitSelector" defaultValue={5} onChange={handleSelectorChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            <div className="row">
                {limit < infoCuentas.length ? <AccountGrid accounts={infoCuentas.slice(0, limit)} /> : <AccountGrid accounts={infoCuentas} />}

                {limit < infoCuentas.length ? <ShowMoreButton setlimit={setlimit} arrayFullSize={infoCuentas.length} /> : null}
            </div>
        </>
    )
}
