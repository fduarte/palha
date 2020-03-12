import React from "react"

function LoadingMessage(props) {

    if (props.isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow" style={{width: '25em', height: '25em'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return null;

}

export default LoadingMessage;