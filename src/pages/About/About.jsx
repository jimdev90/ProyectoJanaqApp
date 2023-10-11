import {BannerTitlePage} from "../../components/BannerTitlePage/";
import {SectionInfo, SectionTeam} from './index.js'

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
