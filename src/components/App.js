import React from "react"
import Header from "./Header"
// import MainContent from "./MainContent"
import LanguageContextProvider, {LanguageContext} from "../contexts/LanguageContext";
import Bio from "./Bio"
import Footer from "./Footer"
import Loading from "./Loading"

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            isLoading: true
        }
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 1500);
    // }

    render() {

        // if (this.state.isLoading) {
            // return (<Loading />)
        // } else {
            return (
                <LanguageContextProvider>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <Header/>
                    <Bio/>
                    {/*{bioComponent}*/}
                    <Footer/>
                </div>
                </LanguageContextProvider>
            )
        }
    // }
}

export default App;