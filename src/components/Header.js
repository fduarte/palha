import React from "react";
import Language from "./Language";

class Header extends React.Component {

    render() {
        return (
            <header className="masthead mb-auto">
                <div className="inner">
                    <a className="masthead-brand" href="/">
                        <img alt="Palha d'Aço" src="/img/palha-logo-300.png" />
                    </a>
                    <div className="justify-content-right text-right">
                        <a href="#"><Language /></a>
                    </div>
                    <nav className="nav nav-masthead justify-content-center">
                        <a className="nav-link active" href="#">Biografia</a>
                        <a className="nav-link" href="#" onClickCapture={() => console.log('TEST') }>Álbuns</a>
                        <a className="nav-link" href="#">Vídeos</a>
                        <a className="nav-link" href="#">Concertos</a>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;