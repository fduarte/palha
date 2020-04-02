import React from "react";
import Language from "./Language";
import { LanguageContext } from "../contexts/LanguageContext";

import {
    Link
} from "react-router-dom";
import data from "../data/data";

class Header extends React.Component {

    static contextType = LanguageContext;

    render() {

        const lang = this.context.lang;

        return (
                <header className="masthead mb-auto">
                    <div className="inner">
                        <Link className="masthead-brand" to="/">
                            <img alt="Palha d'Aço" src="/img/palha-logo-300.png" />
                        </Link>
                        <div className="justify-content-right text-right">
                            <a href="#"><Language /></a>
                        </div>
                        <nav className="nav nav-masthead justify-content-center">
                            {data[lang].nav.map((link, index) => {
                                return <Link className="nav-link" to={link.to}>{link.name}</Link>
                            })}
                        </nav>
                    </div>
                </header>
        )
    }
}

export default Header;