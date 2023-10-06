import {TestimonialItem} from "./TestimonialItem/index.jsx";
import {useEffect} from "react";

export const SectionTestimonials = () => {

    useEffect(() => {
        $('#testimonials').owlCarousel({
            loop: true,
            nav: true,
            margin: 30, // autoplay:true,
            // autoplayTimeout:9000,
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
        <section className="testimonials testimonials-v2">
            <div className="testimonials-h">
                <div className="testimonials-content">
                    <div className="container">
                        <div id="testimonials" className="owl-carousel owl-theme">
                            <TestimonialItem />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
