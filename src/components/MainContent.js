import React from "react";


// @todo - Load component based on nav link selected

// import data from "../data/data.js"

function MainContent(props) {

    return (
        <main role="main" className="inner cover">
            <h1 className="cover-heading">{props.bio.title}</h1>
            <p className="lead">{props.body}</p>
        </main>
    )

    // return (
    //     <main role="main" className="inner cover">
    //         <h1 className="cover-heading">Cover your page.</h1>
    //         <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download,
    //             edit the text, and add your own fullscreen background photo to make it your own.</p>
    //         <p className="lead">
    //             <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
    //         </p>
    //     </main>
    // )
}

export default MainContent;