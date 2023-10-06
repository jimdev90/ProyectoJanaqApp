export const SectionForm = () => {
    return (
        <section className="section-contact">
            <div className="container">
                <div className="contact">
                    <div className="row">
                        <div className="col-md-6 col-lg-5">
                            <div className="text">
                                <h2>Contáctanos</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                <ul>
                                    <li><i className=" fa ion-ios-location-outline"></i> 121 King Str, Melbourne Victoria</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i> 1-548-854-8898</li>
                                    <li><i className="fa fa-envelope-o" aria-hidden="true"></i>hello@skylinehotel.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-lg-offset-1">
                            <div className="contact-form">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text" className="field-text" name="name" placeholder="Nombres y Apellidos" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="field-text" name="email" placeholder="Email" />
                                        </div>
                                        <div className="col-sm-12">
                                            <input type="text" className="field-text" name="subject" placeholder="Asunto" />
                                        </div>
                                        <div className="col-sm-12">
                                            <textarea cols="30" rows="10" name="message" className="field-textarea" placeholder="Describe tu mensaje..."></textarea>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="submit" className="btn btn-room">ENVIAR</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
