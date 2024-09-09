import React from 'react';
import { Link } from 'react-router-dom';

function MobilitySol() {
  return (
    <div>
        <div className="position-relative" style={{
                backgroundImage: 'url("/Mobility.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '40vh'
            }}>
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold d-flex align-items-center mx-3" to="/">
                            <img src="sarbloh_logo.png" alt="Company Logo" style={{ height: '25px', marginRight: '10px' }} />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-2 p-2">
                                    <Link className="nav-link text-white" to="/about">About</Link>
                                </li>
                                <li className="nav-item mx-2 p-2">
                                    <Link className="nav-link text-white" to="/mobility">Solutions</Link>
                                </li>
                                <li className="nav-item mx-2 p-2">
                                    <Link className="nav-link text-white" to="/partner">Partner</Link>
                                </li>
                                <li className="nav-item mx-2 p-2">
                                    <Link className="nav-link text-white" to="/career">Career</Link>
                                </li>
                                <li className="nav-item mx-2 p-2">
                                    <Link className=" btn btn-light text-dark" to="/contact" style={{ borderRadius: '9px', border: '1px solid #000' }}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{ maxWidth: '90%' }}>
                    <h1 className="display-2 display-md-2 fw-bold mb-3 mb-md-4">Mobility Solutions</h1>
                    <p className="lead fs-6 fs-md-5">
                    Empowering low-density areas with innovative transportation options
                    </p>
                </div>
            </div>
      
    </div>
  );
}

export default MobilitySol;
