import React, { createContext, Component } from "react";

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {

    state = {
        lang: 'PT'
    }

    setLang = (lang) => {
        this.setState({lang: lang})
    }

    render() {
        return(
            <LanguageContext.Provider value={{...this.state, setLang: this.setLang}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContextProvider;

