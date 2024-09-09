import React from 'react';

function HomePage() {
    return (
        <div className="container-fluid bg-dark text-light">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-5 text-end ">
                        <img src="HomePage.png" alt="Empowering Communities" className="" style={{ height: "50vh", width: "100%" }} />
                    </div>

                    <div className="col-md-6 ">
                        <h1 className="display-4 fw-bold">Empowering Communities, Innovating Mobility</h1>
                        <p className="lead">
                            We are a deep tech company focused on community empowerment and mobility solutions.
                            Our mission is to connect people to the services they need, while creating opportunities
                            for economic growth and social development. We are rooted in the Canadian Prairies, with
                            a focus on empowering indigenous communities and those in need.
                        </p>
                        <div className="card px-2" style={{maxWidth:"400px",background:"#293039"}}>
                            <div className="card-body p-2 d-flex align-items-center text-white">
                                <i className="fa-solid fa-magnifying-glass me-2"></i>
                                <input
                                    type="text"
                                    className="form-control bg-transparent text-light border-0 me-2"
                                    placeholder="Search for a service or location"
                                    aria-label="Search"
                                    style={{ '::placeholder': { color: 'white' } }}
                                />
                                <button className="btn btn-primary" type="button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 py-5">
                    <h2 className='display-6 fw-bold'>Deep Tech Education</h2>
                    <div className="row">
                        <div className="col-md-10">
                            <p className="lead">
                                We are a deep tech company focused on community empowerment and mobility solutions.
                                Our mission is to connect people to the services they need, while creating opportunities
                                for economic growth and social development. We are rooted in the Canadian Prairies, with
                                a focus on empowering indigenous communities and those in need.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {['AI and Blockchain', 'Quantum Computing', 'Cybersecurity', 'Data Science'].map((topic, index) => {
                            const images = ['image0.webp', 'image0.webp', 'image0.webp', 'image0.webp'];
                            return (
                                <div key={index} className="col-md-3 mb-4">
                                    <div className="card bg-transparent border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <img src={images[index]} alt={topic} className="img-fluid" style={{ height: "20vh", width: "100%", borderRadius: "20px" }} />
                                                </div>
                                                <div className="col-12 mx-2 mt-2">
                                                    <h5 className="card-title text-white">{topic}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-5 py-5">
                    <h2 className='display-6 fw-bold'>Community Empowerment</h2>
                    <div className="row">
                        <div className="col-md-10">
                            <p className="lead">
                                We are a deep tech company focused on community empowerment and mobility solutions.
                                Our mission is to connect people to the services they need, while creating opportunities
                                for economic growth and social development. We are rooted in the Canadian Prairies, with
                                a focus on empowering indigenous communities and those in need.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {['Rural Connectivity', 'Economic Development', 'Health and Wellness', 'Indigenous Rights'].map((topic, index) => {
                            const images = ['image0.webp', 'image0.webp', 'image0.webp', 'image0.webp'];
                            return (
                                <div key={index} className="col-md-3 mb-4">
                                    <div className="card bg-transparent border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <img src={images[index]} alt={topic} className="img-fluid" style={{ height: "20vh", width: "100%", borderRadius: "20px" }} />
                                                </div>
                                                <div className="col-12 text-center mt-2">
                                                    <h5 className="card-title text-white">{topic}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-5 py-5">
                    <h2 className='display-6 fw-bold'>Mobility Solutions</h2>
                    <div className="row">
                        <div className="col-md-10">
                            <p className="lead">
                                We are a deep tech company focused on community empowerment and mobility solutions.
                                Our mission is to connect people to the services they need, while creating opportunities
                                for economic growth and social development. We are rooted in the Canadian Prairies, with
                                a focus on empowering indigenous communities and those in need.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {['Autonomous Vehicles', 'Micro Mobility', 'Public Transit', 'Ride Sharing'].map((topic, index) => {
                            const images = ['image0.webp', 'image0.webp', 'image0.webp', 'image0.webp'];
                            return (
                                <div key={index} className="col-md-3 mb-4">
                                    <div className="card bg-transparent border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <img src={images[index]} alt={topic} className="img-fluid" style={{ height: "20vh", width: "100%", borderRadius: "20px" }} />
                                                </div>
                                                <div className="col-12 text-center mt-2">
                                                    <h5 className="card-title text-white">{topic}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Add similar sections for Community Empowerment and Mobility Solutions */}
        </div>
    );
}

export default HomePage;