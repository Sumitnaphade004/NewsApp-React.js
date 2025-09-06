import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar=(props)=> {

    const {showAlert} = props;
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate("/login");
        showAlert(" Logged out successfully", "success");
    }

    return (
      <div>
            <div>
            <nav className={`navbar fixed-top navbar-expand-lg bg-dark navbar-dark`}>
                <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <Link className="navbar-brand" to="/">NewsDaily</Link>
                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">General</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                    </ul>
                    {!localStorage.getItem("token") ?<form className="d-flex" role="search">
                <Link className='btn btn-primary mx-2' to= "/login" role='button'>Login</Link>
                <Link className='btn btn-primary mx-2' to= "/signup" role='button'>Signup</Link>
              </form>: <button onClick={handleLogout} className='btn btn-primary'>Log out</button>}
                </div>
                </div>
            </nav>
            </div>
        </div>
    )
}
export default NavBar