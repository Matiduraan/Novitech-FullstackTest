import { AccountGridItem } from "./AccountGridItem"

export const AccountGrid = ({ accounts }) => {
    return (

        <>
            {accounts.map(account => {
                return <AccountGridItem key={account.nro_cuenta} {...account} />
            })}
        </>

    )
}
