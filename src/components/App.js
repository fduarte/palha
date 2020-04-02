import React from "react"
import Header from "./Header"
import Loading from "./Loading";
import LanguageContextProvider from "../contexts/LanguageContext";
import Home from "./Home"
import Bio from "./Bio"
import Albums from "./Albums"
import Shows from "./Shows"
import Contacts from "./Contacts";
import Footer from "./Footer"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500);
    }

    render() {

        if (this.state.isLoading) {
            return (<Loading />)
        } else {
            return (
                <LanguageContextProvider>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <Router>
                    <Header/>
                        <Switch>
                            <main role="main" className="inner cover">
                                <Route path="/biography">
                                    <Bio />
                                </Route>
                                <Route path="/albums">
                                    <Albums />
                                </Route>
                                <Route path="/shows">
                                    <Shows />
                                </Route>
                                <Route path="/contacts">
                                    <Contacts />
                                </Route>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                            </main>
                        </Switch>
                    </Router>
                    <Footer/>
                </div>
                </LanguageContextProvider>
            )
        }
    }
}

export default App;