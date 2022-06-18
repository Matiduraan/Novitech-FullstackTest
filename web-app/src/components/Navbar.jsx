import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/NCR_logo_without_background.png'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="NCR logo" width={100} />
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className="nav-item nav-link"
                            to="/misCuentas"
                        >
                            Mis cuentas
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/transferencias"
                        >
                            Transferencias
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}