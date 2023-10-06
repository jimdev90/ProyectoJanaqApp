import {useEffect} from "react";

export const SectionSliderServices = () => {

    useEffect(() => {
        $('#index122').owlCarousel({
            loop: true,
            nav: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }, []);

    return (
        <section className="section-slider  text-center section-slider-v3">
            <div className="container">
                <div id="index122" className="owl-carousel  owl-theme">
                    <div className="item">
                        <div className="wrap-best wrap-best-v3 text-uppercase">
                            <div className="icon-best">
                                <img src="images/Home-1/about-icon-1.png" className="img-responsive" alt="Image"/>
                            </div>
                            <h6 className="sky-h6">Master Bedrooms</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="wrap-best wrap-best-v3 text-uppercase">
                            <div className="icon-best">
                                <img src="images/Home-1/about-icon-2.png" className="img-responsive" alt="Image"/>
                            </div>
                            <h6 className="sky-h6">Master Bedrooms</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="wrap-best wrap-best-v3 text-uppercase">
                            <div className="icon-best">
                                <img src="images/Home-1/about-icon-3.png" className="img-responsive" alt="Image"/>
                            </div>
                            <h6 className="sky-h6">Master Bedrooms</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="wrap-best wrap-best-v3 text-uppercase">
                            <div className="icon-best">
                                <img src="images/Home-1/about-icon-4.png" className="img-responsive" alt="Image"/>
                            </div>
                            <h6 className="sky-h6">Master Bedrooms</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
