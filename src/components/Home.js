import React from "react"
import { LanguageContext } from "../contexts/LanguageContext";

class Home extends React.Component
{
    static contextType = LanguageContext;

    render() {

        const lang = this.context.lang;

        return(
            <div className="home">
                <iframe width="590" height="325" src="https://www.youtube.com/embed/KCwjLLsoqso" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        )
    }
}

export default Home;