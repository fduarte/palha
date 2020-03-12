import React from "react"
import data from "../data/data"
import { LanguageContext } from "../contexts/LanguageContext";

class Bio extends React.Component
{
    static contextType = LanguageContext;

    render() {
        const lang = this.context.lang;

        return(
            <main role="main" className="inner cover">
                <h1>{data[lang].bio.title}</h1>
                <p>{data[lang].bio.body}</p>
            </main>
        )
    }
}

export default Bio;