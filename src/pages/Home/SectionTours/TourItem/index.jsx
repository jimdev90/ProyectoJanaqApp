export const TourItem = ({ img, title, subtitle }) => {
    return (

        <div className="item ">
            <div className="events-item">
                <div className="events-img">
                    <img src={img} className="img-responsive"
                                                 alt="Image"/>
                </div>
                <div className="events-content">
                    <a href="#" title="">
                        <p className="sky-p">{ title }</p>
                        <h3 className="sky-h3">{ subtitle }</h3>
                    </a>
                </div>
            </div>
        </div>

    )
}
