import {useEffect} from "react";
import {SliderItem} from "./SliderItem/index.jsx";

export const SectionSlider = () => {

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
        <section className="section-slider">
            <div id="index12" className="owl-carousel owl-theme">
                <SliderItem
                    img="images/Home-1/Slider-v1-f.jpg"
                    title="Welcome to Skyline"
                    subtitle="Hotels & Resorts"
                />
                <SliderItem
                    img="images/Home-1/Slider-v1-f.jpg"
                    title="Enjoy a Luxury  Experience"
                    subtitle="Hotels & Resorts"
                />
            </div>
        </section>
    )
}
