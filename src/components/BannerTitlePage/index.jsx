export const BannerTitlePage = ({title, subtitle}) => {
    return (
        <section className="banner-tems text-center">
            <div className="container">
                <div className="banner-content">
                    <h2>{ title }</h2>
                    <p>{ subtitle }</p>
                </div>
            </div>
        </section>
    )
}
