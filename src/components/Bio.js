import React from "react"
import data from "../data/data"
import { LanguageContext } from "../contexts/LanguageContext";

class Bio extends React.Component
{
    static contextType = LanguageContext;

    render() {
        const lang = this.context.lang;

        return(
            <div className="bio">
                <h2>{data[lang].bio.title}</h2>
                <p>{data[lang].bio.body}</p>
            </div>
        )
    }
}

export default Bio;