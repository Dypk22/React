import { Link, NavLink } from "react-router-dom";
import web from '../src/hero-1.png';
import cta__2 from '../src/cta-2.png';

const Home = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-md-7 pt-5 pt-lg-0 order-2 order-ld-1">
                            <div className="container">
                                <div className="row">
                                    <div className="text_box">
                                        <h1>
                                            Grow your business with
                                            <strong className="brand-name"> Port Folio</strong>
                                        </h1>
                                        <h2 className="mt-5 mb-3">
                                            We are the team of talented developer <br /> making website
                                        </h2>
                                        <div className="mt-3">
                                            <NavLink to="/service" className="btn cta__btn btn-outline-primary">
                                                Check Our Services
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-1 order-lg-2 header-img">
                            <img src={cta__2} className="img-fluid animated header_img_logo bounce " alt="home logo" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;