export const TeamItem = ({ foto, nombres, cargo, descripcion, redes_sociales }) => {
    return (
        <div className="col-xs-6 col-md-3">
            <div className="team_item text-center">
                <div className="img">
                    <a href="#"><img src={foto} alt="#" /></a>
                </div>
                <div className="text">
                    <h2>{nombres}</h2>
                    <span>{cargo}</span>
                    <p>{descripcion}</p>
                    <div className="team-share">
                        <a href="#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                        <a href="#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
