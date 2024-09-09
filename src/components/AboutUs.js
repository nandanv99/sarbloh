import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="position-relative bg-transparent" style={{padding: '15px'}}>
        <img
          src="/TestImages/3.png"
          alt="Solutions background"
          className="img-fluid w-100"
          style={{ filter: 'brightness(70%)', borderRadius: '20px', height: '70vh', objectFit: 'cover' }}
        />
                <div className="position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white">
                    <h1 className="display-2 mb-4 fw-bold">About Us</h1>
                    <div className="col-md-6">
                        <div className="card bg-light" style={{ maxWidth: "100%" }}>
                            <div className="card-body p-2 d-flex align-items-center text-white">
                                <i className="fa-solid fa-magnifying-glass me-2" style={{ color: 'black' }}></i>
                                <input
                                    type="text"
                                    className="form-control form-control1 bg-transparent  border-0 me-2"
                                    placeholder="Search for a service or location"
                                    aria-label="Search"
                                    style={{ color: 'black' }}
                                />
                                <button className="btn btn-primary" type="button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="card p-3 bg-transparent border border-light">
                            <i className="fas fa-history fa-2x mb-3" style={{ color: "white" }}></i>
                            <h5 className="font-weight-bold" style={{ color: "white" }}>History</h5>
                            <p className="text-white" style={{ color: "white" }}>How we got here</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card p-3 bg-transparent border border-light">
                            <i className="fas fa-lightbulb fa-2x mb-3" style={{ color: "white" }}></i>
                            <h5 className="font-weight-bold" style={{ color: "white" }}>Mission</h5>
                            <p className="text-white" style={{ color: "white" }}>Our purpose</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card p-3 bg-transparent border border-light">
                            <i className="fas fa-users fa-2x mb-3" style={{ color: "white" }}></i>
                            <h5 className="font-weight-bold" style={{ color: "white" }}>Values</h5>
                            <p className="text-white" style={{ color: "white" }}>What we believe</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card p-3 bg-transparent border border-light">
                            <i className="fas fa-user-tie fa-2x mb-3" style={{ color: "white" }}></i>
                            <h5 className="font-weight-bold" style={{ color: "white" }}>Leadership</h5>
                            <p className="text-white" style={{ color: "white" }}>Who leads the way</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card p-3 bg-transparent border border-light">
                            <i className="fas fa-chalkboard-teacher fa-2x mb-3" style={{ color: "white" }}></i>
                            <h5 className="font-weight-bold" style={{ color: "white" }}>Advisors</h5>
                            <p className="text-white" style={{ color: "white" }}>Guidance from experts</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card p-3 bg-transparent border border-light">
                            <i className="fas fa-briefcase fa-2x mb-3" style={{ color: "white" }}></i>
                            <h5 className="font-weight-bold" style={{ color: "white" }}>Careers</h5>
                            <p className="text-grey" style={{ color: "white" }}>Join our team</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-4'>
                <p className='text-white'>
                    Sarbloh Technologies is a deep technology company that creates products and services for a safer, fairer world. We're inspired by the symbol of Sarbloh: iron, known for its strength and inclusivity. Our name reflects our commitment to building durable technology that is accessible to all. We're committed to using our technology to help people learn, grow, and thrive.
                    We work closely with the community to understand their needs and develop solutions that empower them. Our mission is to build a future where everyone can use technology to reach their full potential. We believe that technology should be designed with people's best interests at heart. That's why we're dedicated to creating tools that are safe, reliable, and supportive. We're working to build a more inclusive tech ecosystem by providing resources and opportunities to underrepresented groups.
                    We're also partnering with organizations that share our commitment to diversity and equity. Our leadership team brings together experts from diverse backgrounds who share a passion for making a positive impact through technology. Together, we're driving innovation and shaping the future of tech.
                </p>
            </div>
            <div className='container mt-4'>
                <h3 className='text-white display-7 fw-bold'>Our Mission</h3>
                <p className='text-white'>
                    Our mission is to create a future where evervone has the ooportunity to learn. grow, and thrive. We're buildine a olattorm that helps people unlock their potential by providing access to high-quality education, professional development, and personal growth resources. We believe that everyone deserves the chance to pursue their dreams and make a positive impact on the world. That's why we're committed to building a future where technology is a force for good, helping people overcome barriers and achieve their goals. We're also working to create a more inclusive tech industry by providing resources and opportunities to underrepresented groups. By empowering people from diverse backgrounds to become tech leaders, we can drive innovation, foster creativity, and build a more equitable world. Our mission is to inspire lifelong learning, drive positive change, and create a brighter future for all.
                </p>
            </div>
            <div className='container mt-4'>
                <h3 className='text-white display-7 fw-bold'>Our Values</h3>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <div className="card p-3 bg-transparent border border-light">
                                <i className="fas fa-history fa-2x mb-3" style={{ color: "white" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "white" }}>History</h5>
                                <p className="text-white" style={{ color: "white" }}>How we got here</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card p-3 bg-transparent border border-light">
                                <i className="fas fa-lightbulb fa-2x mb-3" style={{ color: "white" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "white" }}>Mission</h5>
                                <p className="text-white" style={{ color: "white" }}>Our purpose</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card p-3 bg-transparent border border-light">
                                <i className="fas fa-users fa-2x mb-3" style={{ color: "white" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "white" }}>Values</h5>
                                <p className="text-white" style={{ color: "white" }}>What we believe</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card p-3 bg-transparent border border-light">
                                <i className="fas fa-user-tie fa-2x mb-3" style={{ color: "white" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "white" }}>Leadership</h5>
                                <p className="text-white" style={{ color: "white" }}>Who leads the way</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-4'>
                <h3 className='text-white display-7 fw-bold mb-4'>Our Team</h3>
                {[
                    { name: "John Doe", image: "TestPerson.png", position: "CEO", location: "Dubai, UAE" },
                    { name: "Jane Smith", image: "TestPerson.png", position: "CTO", location: "Toronto, Canada" },
                    { name: "Alex Johnson", image: "TestPerson.png", position: "COO", location: "London, UK" }
                ].map((person, index) => (
                    <div key={index} className="profile-card d-flex align-items-center mb-3">
                        <img
                            src={person.image}
                            className="rounded-circle profile-image"
                            alt={person.name}
                        />
                        <div className="profile-info ml-3">
                            <h5 className="mb-0 text-white fw-bold">{person.name}</h5>
                            <p className="text-white fw-bold mb-1">{person.position}</p>
                            <p className="text-white fw-bold small">{person.location}</p>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default AboutUs;