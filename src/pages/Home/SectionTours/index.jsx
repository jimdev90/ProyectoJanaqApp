import {TourItem} from "./TourItem/index.jsx";
import {useEffect} from "react";

export const SectionTours = () => {
    useEffect(() => {
        $('#events-v2').owlCarousel({
            loop: true,
            nav: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }, []);

    return (
        <section className="events" style={{ marginBottom: 33 }}>
            <div className="container">
                <h2 className="events-title">Nuestros Tours</h2>
                <div className="line"></div>
                <div id="events-v2" className="owl-carousel owl-theme">
                    <TourItem
                        img="images/Home-1/Our-Events-1.jpg"
                        title="JANAQ ALL IN ONE 04 DIAS/03 NOCHES"
                        subtitle="S/. 569 x persona"
                    />
                    <TourItem
                        img="images/Home-1/Our-Events-1.jpg"
                        title="JANAQ ALL IN ONE 05 DIAS/04 NOCHES"
                        subtitle="S/. 690 x persona"
                    />

                    <TourItem
                        img="images/Home-1/Our-Events-1.jpg"
                        title="JANAQ ALL IN ONE 06 DIAS/05 NOCHES"
                        subtitle="S/. 819 x persona"
                    />
                </div>
            </div>
        </section>
    )
}
