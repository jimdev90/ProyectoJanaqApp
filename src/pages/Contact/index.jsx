import {BannerTitlePage} from "../../components/BannerTitlePage/index.jsx";
import {SectionForm} from "./SectionForm/index.jsx";
import {SectionMaps} from "./SectionMaps/index.jsx";

export const ContactPage = () => {
    return (
        <>
            <BannerTitlePage
                title="CONTACTANOS"
                subtitle="Lorem Ipsum is simply dummy text of the printing"
            />

            <SectionForm />
            <SectionMaps />
        </>
    )
}
