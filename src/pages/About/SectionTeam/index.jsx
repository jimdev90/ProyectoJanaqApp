import {TeamItem} from "./TeamItem/index.jsx";

export const SectionTeam = () => {
    return (
        <section className="section-team">
            <div className="container">
                <div className="team">
                    <h2 className="heading text-center">Team Member</h2>
                    <p className="sub-heading text-center">Lorem Ipsum is simply dummy text of the printing</p>
                    <div className="team_content">
                        <div className="row">
                            <TeamItem
                                foto="images/About/about-3.png"
                                nombres="JESSICA ALBA"
                                cargo="Manager lotus Hotel"
                                descripcion="Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per."
                            />
                            <TeamItem
                                foto="images/About/about-3.png"
                                nombres="ANDRES MENDOZA"
                                cargo="Manager lotus Hotel"
                                descripcion="Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per."
                            />
                            <TeamItem
                                foto="images/About/about-3.png"
                                nombres="JORGE ALBA"
                                cargo="Manager lotus Hotel"
                                descripcion="Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per."
                            />
                            <TeamItem
                                foto="images/About/about-3.png"
                                nombres="MARIA ALBA"
                                cargo="Manager lotus Hotel"
                                descripcion="Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
