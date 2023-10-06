export const Footer = () => {
    return (
        <footer className="footer-sky">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                            <div className="icon-email">
                                <a href="#" title="Email"><img src="images/Home-1/footer-top-icon-l.png" alt="Email"
                                                               className="img-responsive" /></a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-5">
                            <div className="textbox">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="email" className="form-control"
                                                   placeholder="Your email address" aria-label="Search for..." />
                                                <button className="btn btn-secondary" type="button">
                                                    <i className="ion-android-send"></i>
                                                </button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 text-right">
                            <div className="footer-icon-l">
                                <a href="#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" title="Facebook"><i className="fa fa-facebook-square"
                                                                aria-hidden="true"></i></a>
                                <a href="#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                                <a href="#" title="Isnstagram"><i className="fa fa-instagram"
                                                                  aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-mid">
                <div className="container">
                    <div className="row padding-footer-mid">
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="footer-logo text-center list-content">
                                <a href="index.html" title="Skyline"><img src="images/Home-1/sky-logo-footer.png"
                                                                          alt="Image" /></a>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1  ">
                            <div className="list-content">
                                <ul>
                                    <li><a href="attractions.html" title="">Site Map</a></li>
                                    <li><a href="tems_condition_1.html" title="">Term & Conditions</a></li>
                                    <li><a href="#" title="">Privacy Policy</a></li>
                                    <li><a href="#" title="">Help</a></li>
                                    <li><a href="#" title="">Affiliate</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1 ">
                            <div className="list-content ">
                                <ul>
                                    <li><a href="#" title="">Our Location</a></li>
                                    <li><a href="#" title="">Career</a></li>
                                    <li><a href="about.html" title="">About Us</a></li>
                                    <li><a href="contact.html" title="">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                            <div className="list-content ">
                                <ul>
                                    <li><a href="#" title="">FAQS</a></li>
                                    <li><a href="#" title="">News</a></li>
                                    <li><a href="gallery_1.html" title="">Photo & Video</a></li>
                                    <li><a href="restaurant_1.html" title="">Restaurant</a></li>
                                    <li><a href="#" title="">Gift Card</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                            Copyright © 2017 by <a href="#" title="">EngoTheme.</a> SkyLine Hotel Theme crafted with
                            love
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                            <div className="payments text-right">
                                <ul>
                                    <li>
                                        <a href="#" title="Paypal"><img src="images/Home-1/Paypal.png" alt="Paypal" /></a>
                                    </li>
                                    <li>
                                        <a href="#" title="Visa"><img src="images/Home-1/Visa.png" alt="Visa"/></a>
                                    </li>
                                    <li>
                                        <a href="#" title="Master"><img src="images/Home-1/Master-card.png"
                                                                        alt="Master"/></a>
                                    </li>
                                    <li>
                                        <a href="#" title="Discover"><img src="images/Home-1/Discover.png"
                                                                          alt="Discover"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
