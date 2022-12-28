import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand logo_text" to="/">Port Folio</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link {({isActive}) => (isActive ? 'active' : '')}" to="/"> Home </NavLink >
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service"> Service </NavLink >
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact"> Contact </NavLink >
                                        </li>
                                        {/* <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="nav-item">
                                            <a className="nav-link disabled">Disabled</a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Navbar;