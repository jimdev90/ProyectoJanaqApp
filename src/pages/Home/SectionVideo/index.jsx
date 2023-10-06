import {useEffect} from "react";

export const SectionVideo = () => {
    useEffect(() => {
        $(".btn-play").on("click", function(event) {
            var target = $(this).attr('href'),
                url = $(target).data('video');

            var has_query_string = url.split('?', url);
            if (typeof has_query_string[1] == 'string') {
                url += '&' + $(target).data('query-string');
            } else {
                url += '?' + $(target).data('query-string');
            }
            $(target).find('iframe').attr('src', url);

            $(target).addClass('opened');
            $(target).on("click", function() {
                $(this).removeClass('opened').attr('src', '');
            });

            event.preventDefault();
        });
    }, []);
    return (
        <div className="video-v4">
            <div className="post">
                <div className="entry-media ">
                    <a href="#">
                        <img src="images/Home-4/about-video.jpg" alt="#" className="img-responsive" />
                    </a>
                    <div className="section-video ">
                        <a className="btn-play" href="#modal-video-1"></a>
                        <div id="modal-video-1" className="modal-video" data-video="https://www.youtube.com/embed/ibuUmMhD2Pg" data-query-string="ecver=1&autoplay=1&showinfo=0&controls=0&modestbranding=1">
                            <iframe allowFullScreen="" height="394"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
