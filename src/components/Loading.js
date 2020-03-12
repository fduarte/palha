import React from "react"
// import LoadingMessage from "./LoadingMessage";

class Loading extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         isLoading: true
    //     }
    // }
    //
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 1500);
    // }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow" style={{width: '25em', height: '25em', marginTop: '10%'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
        // return (
        //     <div>
        //         <LoadingMessage isLoading={this.state.isLoading} />
        //     </div>
        // )
    }
}

export default Loading;