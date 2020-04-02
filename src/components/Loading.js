import React from "react"

class Loading extends React.Component {

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow" style={{width: '25em', height: '25em', marginTop: '10%'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Loading;