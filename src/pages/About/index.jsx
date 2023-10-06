import {BannerTitlePage} from "../../components/BannerTitlePage/index.jsx";
import {SectionInfo} from "./SectionInfo/index.jsx";
import {SectionTeam} from "./SectionTeam/index.jsx";

export const AboutPage = () => {
    return (
        <>
            <BannerTitlePage
                title="Nosotros"
                subtitle="Lorem Ipsum is simply dummy text of the printing"
            />

            <SectionInfo />

            <SectionTeam />
        </>
    )
}
