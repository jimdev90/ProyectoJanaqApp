import {OurApartamentsItem} from "./";
import {useEffect} from "react";
import {image} from '../../../assets'

export const SectionOurApartaments = () => {

    useEffect(() => {
        $('#events').owlCarousel({
            loop: true,
            nav: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

    }, []);
    return (
        <section className="rooms rooms-v2">
            <div className="container">
                <h2 className="title-room">Nuestros Apartamentos</h2>
                <div className="outline"></div>
                <p className="rooms-p">When you host a party or family reunion, the special celebrations let you streng then bonds with</p>
                <div className="wrap-rooms">
                    <div className="row">
                        <div id="events" className="owl-carousel owl-theme">
                            <OurApartamentsItem image={image.Apartamento370x370_1} />
                            <OurApartamentsItem image={image.Apartamento370x370_2} />
                            <OurApartamentsItem image={image.Apartamento370x370_3} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
