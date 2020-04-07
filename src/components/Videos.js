import React from "react";
import data from "../data/data"
import { LanguageContext } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Videos extends React.Component
{

    static contextType = LanguageContext;

    render() {

        const lang = this.context.lang;

        return(
            <div className="videos row">

                {data[lang].videos.map((video, index) => {

                    let videoUrl = 'https://www.youtube.com/embed/' + video.hash;

                    return <div className="col-12 mb-5">

                        <h3><small><FontAwesomeIcon icon={['fas', 'video']} /></small> {video.title}</h3>

                        <iframe height="320px" src={videoUrl} frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>

                    </div>
                })}

            </div>
        );

    }
}

export default Videos;


