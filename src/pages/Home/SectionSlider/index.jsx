import {useEffect} from "react";
import {SliderItem} from "./SliderItem/index.jsx";
import { image } from '../../../assets';

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
                    img={image.Slider1920x10001}
                    title="Bienvenido a Janaq Cusco"
                    subtitle="Hoteles, Apartamentos & Tours"
                />
                <SliderItem
                    img={image.Slider1920x10002}
                    title="Disfruta de una experiencia de lujo"
                    subtitle="Hoteles, Apartamentos & Tours"
                />
            </div>
        </section>
    )
}
