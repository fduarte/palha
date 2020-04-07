import React from "react"

class Home extends React.Component
{
    render() {

        return(

            <div className="home">
                <iframe src="https://www.youtube.com/embed/0nvLWM_Ly4I" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        )
    }
}

export default Home;