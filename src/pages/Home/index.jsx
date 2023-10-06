import {SectionSlider} from "./SectionSlider/index.jsx";
import {SectionOurApartaments} from "./SectionOurApartaments/index.jsx";
import {SectionSliderServices} from "./SectionSliderServices/index.jsx";
import {SectionVideo} from "./SectionVideo/index.jsx";
import {SectionTours} from "./SectionTours/index.jsx";
import {SectionTestimonials} from "./SectionTestimonials/index.jsx";
import {SectionAboutUs} from "./SectionAboutUs/index.jsx";


export const HomePage = () => {
    return (
        <>
            <SectionSlider />
            <SectionOurApartaments />
            <SectionAboutUs />
            <SectionSliderServices />
            <SectionVideo />
            <SectionTours />
            <SectionTestimonials />
        </>
    )
}
