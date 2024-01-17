// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
  <>
  <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2">Youth Assocation Of Technology</h1>
                            <p className="lead text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <Link className="btn btn-primary btn-lg px-4 me-sm-3" to="/event">Events</Link>
                                <Link className="btn btn-outline-light btn-lg px-4" to="/certificate">Certificate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/*<!-- Features section-->*/}
        <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                        <h2 className="h4 fw-bolder">Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                        <h2 className="h4 fw-bolder">Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                        <h2 className="h4 fw-bolder">Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/*<!-- Pricing section-->*/}
       
        {/*<!-- Testimonials section-->*/}
        <section className="py-5 border-bottom">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Customer testimonials</h2>
                    <p className="lead mb-0">Our customers love working with us</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        {/*<!-- Testimonial 1-->*/}
                        <div className="card mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div className="ms-4">
                                        <p className="mb-1">Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p>
                                        <div className="small text-muted">- Client Name, Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Testimonial 2-->*/}
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div className="ms-4">
                                        <p className="mb-1">The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!</p>
                                        <div className="small text-muted">- Client Name, Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
  </>
  );
};

export default Home;
