import React from 'react';

function SolutionsPage() {
  return (
    <div className="container text-light">
      <div className="position-relative bg-transparent" style={{padding: '15px'}}>
        <img
          src="/TestImages/6.png"
          alt="Solutions background"
          className="img-fluid w-100"
          style={{ filter: 'brightness(70%)', borderRadius: '20px', height: '70vh', objectFit: 'cover' }}
        />
        <div className="position-absolute bottom-0 left-0 w-100 d-flex flex-column justify-content-start text-white p-3 p-md-5 mb-3 mb-md-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-11">
                <h1 className="display-4 display-md-2 fw-bold">Empower your community with tailored educational solutions</h1>
                <p className="lead">We are committed to empowering native communities through tailored educational solutions and employment
                  opportunities. Our programs and projects aim to help these communities harness the potential of emerging
                  technologies</p>
                <div className="d-flex flex-column flex-md-row">
                  <button className="btn btn-primary btn-lg mb-2 mb-md-0 me-md-2 fw-bold text-white" style={{ backgroundColor: '#007bff' }}>Get Started</button>
                  <button className="btn btn-secondary btn-lg fw-bold text-dark" style={{ backgroundColor: '#6c757d' }}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className='display-6 fw-bold'>Tailored solutions for native communities</h2>
            <p>We offer a range of educational programs and resources specifically designed to help native
            communities harness the potential of emerging technologies. Whether you're interested in AI, blockchain, or something else, we have something for you.</p>
            
            <div className="row mt-4">
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/1.png" className="card-img-top" alt="AI Solution" />
                  <div className="card-body">
                    <h5 className="card-title">AI Solutions</h5>
                    <p className="card-text">Cutting-edge AI technologies tailored for native community needs.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/2.png" className="card-img-top" alt="Blockchain Solution" />
                  <div className="card-body">
                    <h5 className="card-title">Blockchain Integration</h5>
                    <p className="card-text">Secure and transparent blockchain solutions for community projects.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/3.png" className="card-img-top" alt="IoT Solution" />
                  <div className="card-body">
                    <h5 className="card-title">IoT Applications</h5>
                    <p className="card-text">Smart IoT solutions to enhance community infrastructure.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/4.png" className="card-img-top" alt="Data Analytics Solution" />
                  <div className="card-body">
                    <h5 className="card-title">Data Analytics</h5>
                    <p className="card-text">Powerful data analysis tools for informed decision-making.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/5.png" className="card-img-top" alt="Cybersecurity Solution" />
                  <div className="card-body">
                    <h5 className="card-title">Cybersecurity</h5>
                    <p className="card-text">Robust security measures to protect community digital assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-12">
            <h3 className='display-9 fw-bold'>Employment opportunities</h3>
            
            
            <div className="row mt-4">
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/1.png" className="card-img-top" alt="AI Solution" />
                  <div className="card-body">
                    <h5 className="card-title">AI Solutions</h5>
                    <p className="card-text">Cutting-edge AI technologies tailored for native community needs.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/2.png" className="card-img-top" alt="Blockchain Solution" />
                  <div className="card-body">
                    <h5 className="card-title">Blockchain Integration</h5>
                    <p className="card-text">Secure and transparent blockchain solutions for community projects.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/3.png" className="card-img-top" alt="IoT Solution" />
                  <div className="card-body">
                    <h5 className="card-title">IoT Applications</h5>
                    <p className="card-text">Smart IoT solutions to enhance community infrastructure.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/4.png" className="card-img-top" alt="Data Analytics Solution" />
                  <div className="card-body">
                    <h5 className="card-title">Data Analytics</h5>
                    <p className="card-text">Powerful data analysis tools for informed decision-making.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card bg-dark text-white h-100">
                  <img src="/TestImages/5.png" className="card-img-top" alt="Cybersecurity Solution" />
                  <div className="card-body">
                    <h5 className="card-title">Cybersecurity</h5>
                    <p className="card-text">Robust security measures to protect community digital assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default SolutionsPage;