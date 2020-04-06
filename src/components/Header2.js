import React from "react";
import Language from "./Language";
import { LanguageContext } from "../contexts/LanguageContext";

import {
    Link
} from "react-router-dom";
import data from "../data/data";

class Header2 extends React.Component {

    static contextType = LanguageContext;

    render() {

        const lang = this.context.lang;

        return (
            <header className="masthead mb-auto">
                <div className="inner">
                    <div className="icon-bar">
                        <Language />
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="masthead-brand" to="/">
                            <img alt="Palha d'Aço" src="/img/palha-logo-300.png" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto float-right">
                                {data[lang].nav.map((link, index) => {
                                    return <li className="nav-item"><Link className="nav-link" to={link.to}>{link.name}</Link></li>
                                })}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header2;