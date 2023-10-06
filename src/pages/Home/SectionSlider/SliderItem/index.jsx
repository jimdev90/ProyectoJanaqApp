export const SliderItem = ({ img, title, subtitle }) => {
    return (
        <div className="item">
            <img alt="Third slide" src={img} className="img-responsive" />
            <div className="carousel-caption">
                <h1>{title}</h1>
                <p><span className="line-t"></span>{subtitle}<span className="line-b"></span></p>
            </div>
        </div>
    )
}
