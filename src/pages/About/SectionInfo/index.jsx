import about from '../../../assets/images/About/about.jpg';
import about1 from '../../../assets/images/About/about-1.jpg';
import {useEffect} from "react";
export const SectionInfo = () => {

    useEffect(() => {
        $('#index12').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }, []);
    return (
        <section className="section-about">
            <div className="container">
                <div className="row">
                    <div className="wrap-about">

                        <div className="about-item">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-right">
                                <div className="section-slider height-v-about">
                                    <div id="index12" className="owl-carousel  owl-theme">
                                        <div className="item">
                                            <img alt="Third slide" src={about} className="img-responsive"/>

                                        </div>
                                        <div className="item">
                                            <img alt="Third slide" src={about1} className="img-responsive"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-left">
                                <div className="text">
                                    <h2 className="heading">SOBRE NOSOTROS</h2>
                                    <div className="desc">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.</p>
                                        <br/>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-item about-right">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  no-padding-left col-lg-push-6 col-md-push-6 ">
                                <div className="img">
                                    <img src={about1} alt="#" className="img-responsive"/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-right col-lg-pull-6 col-md-pull-6">
                                <div className="text">
                                    <h2 className="heading">PORQUE LAS PERSONAS ELIGEN JANAQ?</h2>
                                    <div className="desc">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. Many
                                            <br/>desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
