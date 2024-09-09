import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="">
            <div className="position-relative" style={{
                backgroundImage: 'url("/TestImages/9.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '40vh'
            }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold d-flex align-items-center mx-3" to="/">
                            <img src="sarbloh_logo.png" alt="Company Logo" style={{ height: '25px', marginRight: '10px' }} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-2 p-2">
                                    <Link className="nav-link text-white" to="/about">About</Link>
                                </li>
                                <li className="nav-item mx-2 p-2">
                                    <Link className="nav-link text-white" to="/mobility">Solutions</Link>
                                </li>
                                <li className="nav-item mx-2 p-2">
                                    <Link className="nav-link text-white" to="#">Partner</Link>
                                </li>
                                <li className="nav-item mx-2 p-2">
                                    <Link className="nav-link text-white" to="#">Career</Link>
                                </li>
                                <li className="nav-item mx-2 p-2">
                                    <Link className="btn btn-light text-dark" to="/contact" style={{ borderRadius: '9px', border: '1px solid #000' }}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{ maxWidth: '90%' }}>
                    <h1 className="display-2 display-md-2 fw-bold mb-3 mb-md-4">About Us</h1>
                </div>
            </div>
            <div className="container mt-5">
                <div className="">
                    <div className="row row-cols-2 row-cols-md-6">
                        <div className="col mb-3">
                            <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                <i className="fas fa-history fa-2x mb-3" style={{ color: "black" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "black" }}>History</h5>
                                <p className="" style={{ color: "#4F7396" }}>How we got here</p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                <i className="fas fa-lightbulb fa-2x mb-3" style={{ color: "black" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "black" }}>Mission</h5>
                                <p className="" style={{ color: "#4F7396" }}>Our purpose</p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                <i className="fas fa-users fa-2x mb-3" style={{ color: "black" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "black" }}>Values</h5>
                                <p className="" style={{ color: "#4F7396" }}>What we believe</p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                <i className="fas fa-user-tie fa-2x mb-3" style={{ color: "black" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "black" }}>Leadership</h5>
                                <p className="" style={{ color: "#4F7396" }}>Who leads the way</p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                <i className="fas fa-chalkboard-teacher fa-2x mb-3" style={{ color: "black" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "black" }}>Advisors</h5>
                                <p className="" style={{ color: "#4F7396" }}>Guidance from experts</p>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                <i className="fas fa-briefcase fa-2x mb-3" style={{ color: "black" }}></i>
                                <h5 className="font-weight-bold" style={{ color: "black" }}>Careers</h5>
                                <p className="" style={{ color: "#4F7396" }}>Join our team</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-5' />
            </div>
            <div className='container mt-4'>
                <h3 className=' display-7 fw-bold'>History</h3>
                <p className='text-justify'>
                    Sarbloh Technologies is a deep technology company that creates products and services for a safer, fairer world. We're inspired by the symbol of Sarbloh: iron, known for its strength and inclusivity. Our name reflects our commitment to building durable technology that is accessible to all. We're committed to using our technology to help people learn, grow, and thrive. We work closely with the community to understand their needs and develop solutions that empower them. Our mission is to build a future where everyone can use technology to reach their full potential. We believe that technology should be designed with people's best interests at heart. That's why we're dedicated to creating tools that are safe, reliable, and supportive. We're working to build a more inclusive tech ecosystem by providing resources and opportunities to underrepresented groups. We're also partnering with organizations that share our commitment to diversity and equity. Our leadership team brings together experts from diverse backgrounds who share a passion for making a positive impact through technology. Together, we're driving innovation and shaping the future of tech.
                </p>
                <hr className='my-5' />
            </div>

            <div className='container mt-4'>
                <h3 className=' display-7 fw-bold'>Our Mission</h3>
                <p className='text-justify'>
                    Our mission is to create a future where everyone has the opportunity to learn, grow, and thrive. We're building a platform that helps people unlock their potential by providing access to high-quality education, professional development, and personal growth resources. We believe that everyone deserves the chance to pursue their dreams and make a positive impact on the world. That's why we're committed to building a future where technology is a force for good, helping people overcome barriers and achieve their goals. We're also working to create a more inclusive tech industry by providing resources and opportunities to underrepresented groups. By empowering people from diverse backgrounds to become tech leaders, we can drive innovation, foster creativity, and build a more equitable world. Our mission is to inspire lifelong learning, drive positive change, and create a brighter future for all.
                </p>
                <hr className='my-5' />
            </div>

            <div className='container mt-4'>
                <h3 className=' display-7 fw-bold'>Our Values</h3>
                <p className='text-justify'>
                    Our mission is to create a future where everyone has the opportunity to learn, grow, and thrive. We're building a platform that helps people unlock their potential by providing access to high-quality education, professional development, and personal growth resources. We believe that everyone deserves the chance to pursue their dreams and make a positive impact on the world. That's why we're committed to building a future where technology is a force for good, helping people overcome barriers and achieve their goals. We're also working to create a more inclusive tech industry by providing resources and opportunities to underrepresented groups. By empowering people from diverse backgrounds to become tech leaders, we can drive innovation, foster creativity, and build a more equitable world. Our mission is to inspire lifelong learning, drive positive change, and create a brighter future for all.
                </p>
                <div className="mt-5">
                    <div className="">
                        <div className="row row-cols-2 row-cols-md-6">
                            <div className="col mb-3">
                                <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                    <i className="fas fa-history fa-2x mb-3" style={{ color: "black" }}></i>
                                    <h5 className="font-weight-bold" style={{ color: "black" }}>History</h5>
                                    <p className="" style={{ color: "#4F7396",fontSize: '14px' }}>How we got here</p>
                                </div>
                            </div>
                            <div className="col mb-3">
                                <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                    <i className="fas fa-lightbulb fa-2x mb-3" style={{ color: "black" }}></i>
                                    <h5 className="font-weight-bold" style={{ color: "black" }}>Mission</h5>
                                    <p className="" style={{ color: "#4F7396",fontSize: '14px' }}>Our purpose</p>
                                </div>
                            </div>
                            <div className="col mb-3">
                                <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                    <i className="fas fa-users fa-2x mb-3" style={{ color: "black" }}></i>
                                    <h5 className="font-weight-bold" style={{ color: "black" }}>Values</h5>
                                    <p className="" style={{ color: "#4F7396",fontSize: '14px' }}>What we believe</p>
                                </div>
                            </div>
                            <div className="col mb-3">
                                <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                    <i className="fas fa-user-tie fa-2x mb-3" style={{ color: "black" }}></i>
                                    <h5 className="font-weight-bold" style={{ color: "black" }}>Leadership</h5>
                                    <p className="" style={{ color: "#4F7396",fontSize: '14px' }}>Who leads the way</p>
                                </div>
                            </div>
                            <div className="col mb-3">
                                <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                    <i className="fas fa-chalkboard-teacher fa-2x mb-3" style={{ color: "black" }}></i>
                                    <h5 className="font-weight-bold" style={{ color: "black" }}>Advisors</h5>
                                    <p className="" style={{ color: "#4F7396",fontSize: '14px' }}>Guidance from experts</p>
                                </div>
                            </div>
                            <div className="col mb-3">
                                <div className="card p-3  h-100" style={{ borderRadius: '8px', border: '1px solid #D1DBE8', background: '#F7FAFC' }}>
                                    <i className="fas fa-briefcase fa-2x mb-3" style={{ color: "black" }}></i>
                                    <h5 className="font-weight-bold" style={{ color: "black" }}>Careers</h5>
                                    <p className="" style={{ color: "#4F7396" }}>Join our team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                <h3 className=' display-7 fw-bold'>Our Team</h3>
                <p className='text-justify'>
                    Our mission is to create a future where everyone has the opportunity to learn, grow, and thrive. We're building a platform that helps people unlock their potential by providing access to high-quality education, professional development, and personal growth resources. We believe that everyone deserves the chance to pursue their dreams and make a positive impact on the world. That's why we're committed to building a future where technology is a force for good, helping people overcome barriers and achieve their goals. We're also working to create a more inclusive tech industry by providing resources and opportunities to underrepresented groups. By empowering people from diverse backgrounds to become tech leaders, we can drive innovation, foster creativity, and build a more equitable world. Our mission is to inspire lifelong learning, drive positive change, and create a brighter future for all.
                </p>
                <div className="row">
                    <div className="col-12">

                        <div className="row mt-4">
                            <div className="col mb-4">
                                <div className="card bg-transparent text-white h-100 border-0">
                                    <img src="/TestImages/10.png" className="card-img-top" alt="AI Solution" style={{borderRadius: '14px 14px 64px 14px',background: 'url(/TestImages/10.png) lightgray 50% / cover no-repeat'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            color: '#0D141C',
                                            fontFeatureSettings: "'dlig' on",
                                            fontSize: '22px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '150%'
                                        }}>Jasmin Brains</h5>
                                        <p className=" text-black">Co-founder & CEO <br /> Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card bg-transparent text-white h-100 border-0">
                                    <img src="/TestImages/10.png" className="card-img-top" alt="AI Solution" style={{borderRadius: '14px 14px 64px 14px',background: 'url(/TestImages/10.png) lightgray 50% / cover no-repeat'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            color: '#0D141C',
                                            fontFeatureSettings: "'dlig' on",
                                            fontSize: '22px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '150%'
                                        }}>Jasmin Brains</h5>
                                        <p className=" text-black">Co-founder & CEO <br /> Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card bg-transparent text-white h-100 border-0">
                                    <img src="/TestImages/10.png" className="card-img-top" alt="AI Solution" style={{borderRadius: '14px 14px 64px 14px',background: 'url(/TestImages/10.png) lightgray 50% / cover no-repeat'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            color: '#0D141C',
                                            fontFeatureSettings: "'dlig' on",
                                            fontSize: '22px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '150%'
                                        }}>Jasmin Brains</h5>
                                        <p className=" text-black">Co-founder & CEO <br /> Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card bg-transparent text-white h-100 border-0">
                                    <img src="/TestImages/10.png" className="card-img-top" alt="AI Solution" style={{borderRadius: '14px 14px 64px 14px',background: 'url(/TestImages/10.png) lightgray 50% / cover no-repeat'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            color: '#0D141C',
                                            fontFeatureSettings: "'dlig' on",
                                            fontSize: '22px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '150%'
                                        }}>Jasmin Brains</h5>
                                        <p className=" text-black">Co-founder & CEO <br /> Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card bg-transparent text-white h-100 border-0">
                                    <img src="/TestImages/10.png" className="card-img-top" alt="AI Solution" style={{borderRadius: '14px 14px 64px 14px',background: 'url(/TestImages/10.png) lightgray 50% / cover no-repeat'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            color: '#0D141C',
                                            fontFeatureSettings: "'dlig' on",
                                            fontSize: '22px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '150%'
                                        }}>Jasmin Brains</h5>
                                        <p className=" text-black">Co-founder & CEO <br /> Canada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <hr className='' />
            <footer className="text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex flex-column flex-md-row   justify-content-md-start mb-3 mb-md-0">
                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="113" height="30" viewBox="0 0 133 30" fill="none">
                                <path d="M29.9956 15.0132L22.4903 7.50781V18.7658C22.4903 20.8197 20.8169 20.8197 18.7377 18.7658L14.985 15.0132V26.2458C14.985 28.325 13.3116 28.325 11.2325 26.2458L7.50514 22.5185H3.75257C1.67342 22.5185 0 24.192 0 26.2458V29.9985H18.7377C20.8169 29.9985 22.4903 28.325 22.4903 26.2458V22.5185H26.243C28.2968 22.5185 29.9956 20.8197 29.9956 18.7658V15.0132Z" fill="black" />
                                <path d="M0 15.0127L7.50514 22.518V11.26C7.50514 9.20615 9.17866 9.20615 11.2325 11.26L14.985 15.0127V3.75463C14.985 1.7008 16.6839 1.7008 18.7377 3.75463L22.4903 7.50731H26.243C28.2968 7.50731 29.9956 5.83382 29.9956 3.75463V0.00195312H11.2325C9.17866 0.00195312 7.50514 1.7008 7.50514 3.75463V7.50731H3.75257C1.67342 7.50731 0 9.20615 0 11.26V15.0127Z" fill="black" />
                                <path d="M128.338 24.5971V17.7981C128.338 17.4692 128.32 17.0515 128.285 16.5449C128.249 16.0294 128.138 15.514 127.951 14.9985C127.765 14.483 127.458 14.052 127.032 13.7053C126.614 13.3587 126.018 13.1854 125.245 13.1854C124.934 13.1854 124.601 13.2343 124.245 13.3321C123.89 13.4298 123.557 13.6209 123.245 13.9053C122.934 14.1808 122.677 14.5897 122.472 15.1318C122.277 15.6739 122.179 16.3938 122.179 17.2915L120.099 16.305C120.099 15.1673 120.33 14.1008 120.793 13.1054C121.255 12.11 121.948 11.3057 122.872 10.6925C123.805 10.0792 124.979 9.77259 126.392 9.77259C127.52 9.77259 128.44 9.96367 129.151 10.3458C129.862 10.728 130.413 11.2124 130.804 11.799C131.204 12.3855 131.489 12.9988 131.658 13.6387C131.826 14.2697 131.929 14.8474 131.964 15.3718C132 15.8961 132.018 16.2783 132.018 16.5183V24.5971H128.338ZM118.5 24.5971V5.3999H121.726V15.2651H122.179V24.5971H118.5Z" fill="black" />
                                <path d="M109.886 24.9951C108.437 24.9951 107.166 24.6707 106.073 24.0219C104.98 23.3731 104.126 22.4799 103.513 21.3423C102.909 20.1958 102.607 18.8805 102.607 17.3962C102.607 15.8942 102.918 14.5744 103.54 13.4368C104.162 12.2903 105.02 11.3971 106.113 10.7572C107.206 10.1173 108.464 9.79736 109.886 9.79736C111.334 9.79736 112.605 10.1218 113.698 10.7706C114.8 11.4193 115.658 12.317 116.271 13.4635C116.885 14.6011 117.191 15.912 117.191 17.3962C117.191 18.8894 116.88 20.2092 116.258 21.3557C115.645 22.4933 114.787 23.3865 113.685 24.0353C112.592 24.6752 111.325 24.9951 109.886 24.9951ZM109.886 21.6089C111.05 21.6089 111.916 21.2179 112.485 20.4358C113.063 19.6448 113.352 18.6316 113.352 17.3962C113.352 16.1164 113.058 15.0944 112.472 14.33C111.894 13.5657 111.032 13.1835 109.886 13.1835C109.095 13.1835 108.446 13.3613 107.939 13.7168C107.433 14.0723 107.055 14.5655 106.806 15.1966C106.566 15.8276 106.446 16.5608 106.446 17.3962C106.446 18.6849 106.735 19.7115 107.313 20.4758C107.899 21.2312 108.757 21.6089 109.886 21.6089Z" fill="black" />
                                <path d="M97.3843 24.5961V4.99902H101.01V24.5961H97.3843Z" fill="black" />
                                <path d="M89.1558 24.997C87.7249 24.997 86.5295 24.6637 85.5696 23.9971C84.6098 23.3306 83.8854 22.424 83.3966 21.2776C82.9167 20.1311 82.6767 18.8379 82.6767 17.3981C82.6767 15.9583 82.9167 14.6652 83.3966 13.5187C83.8765 12.3722 84.5831 11.4657 85.5163 10.7991C86.4495 10.1325 87.6004 9.79925 88.9691 9.79925C90.3467 9.79925 91.5465 10.1281 92.5686 10.7858C93.5907 11.4435 94.3817 12.3455 94.9416 13.492C95.5104 14.6296 95.7948 15.9317 95.7948 17.3981C95.7948 18.8379 95.5148 20.1311 94.9549 21.2776C94.4039 22.424 93.6307 23.3306 92.6352 23.9971C91.6398 24.6637 90.48 24.997 89.1558 24.997ZM82.0635 24.5971V5.3999H85.7163V14.7319H85.263V24.5971H82.0635ZM88.5692 21.7708C89.3513 21.7708 89.9912 21.5753 90.4889 21.1842C90.9866 20.7932 91.3554 20.2688 91.5954 19.6111C91.8354 18.9446 91.9553 18.2069 91.9553 17.3981C91.9553 16.5982 91.8309 15.8695 91.5821 15.2118C91.3332 14.5452 90.9466 14.0164 90.4222 13.6254C89.9068 13.2254 89.2446 13.0254 88.4359 13.0254C87.6804 13.0254 87.0672 13.2076 86.5961 13.572C86.134 13.9364 85.7963 14.4475 85.583 15.1051C85.3697 15.7628 85.263 16.5271 85.263 17.3981C85.263 18.2691 85.3697 19.0334 85.583 19.6911C85.7963 20.3488 86.1429 20.8598 86.6228 21.2242C87.1116 21.5886 87.7604 21.7708 88.5692 21.7708Z" fill="black" />
                                <path d="M72.687 24.5948V10.1969H75.8865V13.7164L75.5399 13.2631C75.7266 12.7654 75.9754 12.3122 76.2865 11.9033C76.5975 11.4945 76.9797 11.1568 77.433 10.8902C77.7796 10.6768 78.1573 10.5124 78.5661 10.3969C78.975 10.2725 79.3971 10.1969 79.8326 10.1703C80.2681 10.1347 80.7036 10.1436 81.1391 10.1969V13.5831C80.7392 13.4587 80.2726 13.4187 79.7393 13.4631C79.2149 13.4987 78.7394 13.6186 78.3128 13.823C77.8862 14.0186 77.5263 14.2808 77.233 14.6096C76.9397 14.9296 76.7175 15.3117 76.5664 15.7561C76.4153 16.1916 76.3398 16.6848 76.3398 17.2359V24.5948H72.687Z" fill="black" />
                                <path d="M62.747 24.9951C61.7161 24.9951 60.8407 24.7996 60.1208 24.4085C59.4098 24.0086 58.8676 23.4798 58.4943 22.8221C58.1299 22.1555 57.9478 21.4223 57.9478 20.6224C57.9478 19.9559 58.05 19.3471 58.2544 18.796C58.4588 18.245 58.7876 17.7606 59.2409 17.3429C59.703 16.9163 60.3207 16.5608 61.094 16.2764C61.6272 16.0809 62.2627 15.9076 63.0003 15.7565C63.738 15.6054 64.5734 15.4632 65.5066 15.3299C66.4398 15.1877 67.4663 15.0321 68.5862 14.8633L67.2797 15.5832C67.2797 14.73 67.0753 14.1034 66.6665 13.7035C66.2576 13.3035 65.5733 13.1035 64.6134 13.1035C64.0802 13.1035 63.5247 13.2324 62.947 13.4901C62.3693 13.7479 61.9649 14.2056 61.7339 14.8633L58.4543 13.8234C58.8187 12.6325 59.5031 11.6638 60.5074 10.9172C61.5117 10.1706 62.8804 9.79736 64.6134 9.79736C65.8844 9.79736 67.0131 9.99289 67.9996 10.3839C68.9861 10.775 69.7327 11.4505 70.2393 12.4103C70.5237 12.9436 70.6925 13.4768 70.7459 14.0101C70.7992 14.5433 70.8258 15.1388 70.8258 15.7965V24.5952H67.653V21.6356L68.1063 22.2489C67.4041 23.2176 66.6442 23.9197 65.8266 24.3552C65.0178 24.7818 63.9913 24.9951 62.747 24.9951ZM63.5203 22.1422C64.1868 22.1422 64.7467 22.0267 65.2 21.7956C65.6622 21.5556 66.0266 21.2846 66.2932 20.9824C66.5687 20.6802 66.7553 20.4269 66.8531 20.2225C67.0397 19.8314 67.1464 19.3782 67.1731 18.8627C67.2086 18.3383 67.2264 17.9028 67.2264 17.5562L68.2929 17.8228C67.2175 18.0006 66.3465 18.1517 65.6799 18.2761C65.0134 18.3916 64.4757 18.4983 64.0668 18.5961C63.658 18.6938 63.2981 18.8005 62.987 18.916C62.6315 19.0582 62.3427 19.2137 62.1205 19.3826C61.9072 19.5426 61.7472 19.7203 61.6405 19.9159C61.5428 20.1114 61.4939 20.3291 61.4939 20.5691C61.4939 20.8979 61.5739 21.1823 61.7339 21.4223C61.9027 21.6534 62.1382 21.8311 62.4404 21.9556C62.7426 22.08 63.1025 22.1422 63.5203 22.1422Z" fill="black" />
                                <path d="M49.7133 24.9956C48.2913 24.9956 47.007 24.7467 45.8605 24.249C44.7229 23.7424 43.7853 23.0225 43.0476 22.0893C42.3188 21.1472 41.8567 20.0274 41.6611 18.7298L45.4472 18.1699C45.7139 19.272 46.2649 20.1207 47.1003 20.7162C47.9358 21.3117 48.8867 21.6094 49.9532 21.6094C50.5487 21.6094 51.1264 21.5161 51.6863 21.3294C52.2462 21.1428 52.7039 20.8673 53.0594 20.5029C53.4238 20.1385 53.606 19.6897 53.606 19.1564C53.606 18.9609 53.5749 18.7743 53.5127 18.5965C53.4594 18.4099 53.3661 18.2366 53.2328 18.0766C53.0994 17.9166 52.9084 17.7655 52.6595 17.6233C52.4195 17.4811 52.1129 17.3522 51.7396 17.2367L46.7537 15.7703C46.3804 15.6636 45.9449 15.5125 45.4472 15.317C44.9584 15.1215 44.4829 14.8415 44.0208 14.4771C43.5586 14.1127 43.172 13.6328 42.861 13.0373C42.5588 12.433 42.4077 11.6731 42.4077 10.7577C42.4077 9.46897 42.7321 8.39801 43.3809 7.54481C44.0297 6.6916 44.8962 6.05614 45.9805 5.63842C47.0648 5.22071 48.2646 5.01629 49.58 5.02518C50.9042 5.04296 52.0863 5.26959 53.1261 5.70508C54.1659 6.14057 55.0369 6.77603 55.739 7.61146C56.4412 8.43801 56.9478 9.45119 57.2588 10.651L53.3394 11.3176C53.1972 10.6955 52.935 10.1711 52.5529 9.74448C52.1707 9.31788 51.713 8.99348 51.1797 8.77129C50.6554 8.5491 50.1043 8.42912 49.5266 8.41134C48.9578 8.39357 48.4201 8.47356 47.9135 8.65131C47.4158 8.82017 47.007 9.06903 46.6871 9.39787C46.376 9.72671 46.2205 10.1178 46.2205 10.571C46.2205 10.9887 46.3493 11.3309 46.6071 11.5975C46.8648 11.8553 47.1892 12.0641 47.5803 12.2241C47.9713 12.3841 48.3713 12.5174 48.7801 12.6241L52.1129 13.5306C52.6106 13.6639 53.1617 13.8417 53.766 14.0638C54.3704 14.2771 54.9481 14.5793 55.4991 14.9704C56.059 15.3525 56.5167 15.8591 56.8722 16.4901C57.2366 17.1212 57.4188 17.9211 57.4188 18.8898C57.4188 19.9208 57.2011 20.8228 56.7656 21.5961C56.339 22.3604 55.7613 22.9959 55.0325 23.5024C54.3037 24.0001 53.4772 24.3734 52.5529 24.6223C51.6374 24.8711 50.6909 24.9956 49.7133 24.9956Z" fill="black" />
                            </svg>
                            <div className="social-icons mt-4 mt-md-0">
                                <a href="#" className="text-black me-3"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M15.3076 13.0418L22.3808 4.99658H20.7046L14.563 11.9821L9.65769 4.99658H4L11.4178 15.5599L4 23.9966H5.67621L12.162 16.6196L17.3423 23.9966H23L15.3071 13.0418H15.3076ZM6.28016 6.23129H8.85472L20.7054 22.818H18.1308L6.28016 6.23129Z" fill="black" />
                                </svg></a>
                                <a href="#" className="text-black me-3"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M11.9432 12.8705C12.6691 12.8705 13.1531 13.295 13.1531 13.9317C13.1531 14.5684 12.6691 14.9928 11.9432 14.9928C11.2173 14.9928 10.7333 14.5684 10.7333 13.9317C10.7333 13.295 11.2173 12.8705 11.9432 12.8705ZM16.5407 12.8705C17.2666 12.8705 17.7506 13.4011 17.6296 14.0378C17.6296 14.6745 17.0247 15.0989 16.2987 14.9928C15.6938 14.9928 15.2098 14.4623 15.2098 13.9317C15.3308 13.295 15.8148 12.8705 16.5407 12.8705ZM22.3481 3.10791C23.8 3.10791 24.8889 4.16906 24.8889 5.33633V5.44245V25.9227L22.2271 23.6943L20.7753 22.4209L19.0815 21.1475L19.6864 23.2698H5.65182C4.19997 23.2698 3.11108 22.2087 3.11108 20.9353V5.44245C3.11108 4.16906 4.19997 3.10791 5.65182 3.10791H22.3481ZM17.7506 17.8579C19.3234 17.8579 20.6543 17.2213 21.5012 16.1601C21.5012 13.9317 20.8963 11.7033 19.6864 9.68706C18.7185 8.94426 17.5086 8.62591 16.1778 8.51979L16.0568 8.73203C17.1457 9.05037 18.2345 9.47483 19.2024 10.1115C17.9926 9.58095 16.7827 9.15649 15.4518 9.05037C14.6049 8.94426 13.758 8.94426 12.9111 9.05037C12.7901 9.05037 12.7901 9.05037 12.6691 9.05037C11.7012 9.15649 10.7333 9.36872 9.88639 9.79318C9.40244 10.0054 9.16047 10.1115 9.16047 10.1115C10.1284 9.36872 11.2173 8.94426 12.4271 8.62591L12.3061 8.51979C11.0963 8.51979 9.88639 8.94426 8.7975 9.68706C7.70861 11.7033 7.10368 13.9317 6.98269 16.1601C7.8296 17.2213 9.28145 17.8579 10.7333 17.8579C10.7333 17.8579 11.2173 17.3274 11.5802 16.9029C10.7333 16.6907 9.88639 16.2662 9.40244 15.6295C9.52343 15.7356 9.64442 15.7356 9.7654 15.8418C9.7654 15.8418 9.88639 15.8418 9.88639 15.9479C10.1284 16.054 10.4913 16.2662 10.8543 16.3723C11.4592 16.5846 12.0642 16.6907 12.6691 16.9029C13.758 17.1151 14.8469 17.1151 15.9358 16.9029C16.5407 16.7968 17.1457 16.6907 17.7506 16.3723C18.2345 16.1601 18.7185 15.9479 19.2024 15.7356C18.5975 16.3723 17.8716 16.9029 16.9037 17.1151C17.3876 17.4335 17.7506 17.8579 17.7506 17.8579Z" fill="black" />
                                </svg></a>
                                <a href="#" className="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M3.83479 13.345C6.1025 12.0749 8.63388 11.0149 10.9991 9.94942C15.0681 8.20429 19.1534 6.48941 23.2798 4.89287C24.0827 4.62084 25.5252 4.35481 25.6667 5.56458C25.5892 7.27699 25.2706 8.97939 25.0521 10.6818C24.4973 14.4255 23.8562 18.1564 23.231 21.8878C23.0156 23.1307 21.4843 23.7741 20.5045 22.9787C18.1498 21.3615 15.777 19.76 13.4524 18.1053C12.6909 17.3185 13.397 16.1887 14.0771 15.6269C16.0165 13.6835 18.0733 12.0324 19.9113 9.98862C20.4071 8.77121 18.9422 9.79721 18.459 10.1116C15.8039 11.9719 13.2139 13.9459 10.4146 15.5809C8.98475 16.3812 7.31824 15.6972 5.88903 15.2506C4.60756 14.7112 2.72974 14.1677 3.83466 13.3451L3.83479 13.345Z" fill="black" />
                                </svg></a>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-end d-flex flex-column justify-content-center mt-4 mt-md-0">
                            <a href="#" className="text-black text-decoration-none"><u> Terms of service</u>  |  <u> Privacy policy</u></a>
                            <p className="text-black">Copyright © 2024 Sarbloh | All Rights Reserved </p>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    );
};

export default AboutUs;