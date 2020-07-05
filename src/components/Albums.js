import React from "react";
import data from "../data/data"
import { LanguageContext } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Albums extends React.Component
{

    static contextType = LanguageContext;

    render() {

        const lang = this.context.lang;

        return(
                <div className="albums row">
                    {data[lang].albums.map((album, index) => {
                        return <div className="col-sm mb-3">
                                <h2><small><FontAwesomeIcon icon={['fas', 'compact-disc']} /></small> {album.title}</h2>
                                <p><small>&copy; {album.date}</small></p>

                                <img style={{width:"300px"}} className="float-left mb-3" src={album.cover} />

                                <ol className="float-left">
                                {album.songs.map((song) =>
                                    <li>{song}</li>
                                )}
                                </ol>

                                <ul className="list-unstyled float-left ml-4">
                                {album.links.map((link) =>
                                    <li><FontAwesomeIcon icon={link.icon} /> <a href={link.url}>{link.name}</a></li>
                                )}
                                </ul>
                        </div>
                    })}
                </div>
        );

    }
}

export default Albums;


