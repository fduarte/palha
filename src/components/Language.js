import React from "react"

import { LanguageContext } from "../contexts/LanguageContext";

class Language extends React.Component {

    static contextType = LanguageContext;

    render() {
        const { lang, setLang } = this.context;

        const activePortugueseFlag = lang === 'PT' ? 'flag active' : 'flag';
        const activeEnglishFlag = lang === 'EN' ? 'flag active' : 'flag';

        return (
            <ul>
                <li><a href="#"><img alt="Portuguese" onClick={() => setLang('PT')} className={activePortugueseFlag} src="/img/portuguese.png" /></a></li>
                <li><a href="#"><img alt="English" onClick={(e) => setLang( 'EN')} className={activeEnglishFlag} src="/img/english.png" /></a></li>
            </ul>
        )
    }
}

export default Language;