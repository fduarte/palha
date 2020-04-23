import React from "react"

class Home extends React.Component
{
    render() {

        return(
            <div className="home">
                <h2>Vota em Palha d'Aço no concurso EDP!</h2>
                <p>
                    <a href="https://edplivebands.edp.com/portugal/banda/palha-daco">
                        <img style={{width: "300px", float: "left", 'margin-right': "15px"}} src="/img/edp.png" />
                    </a>
                    O NOS Alive e o Mad Cool Festival, em Madrid, vão ser os próximos palcos da banda vencedora do EDP Live Bands 2020.
                </p>

                <p className='text-center mt-2' >
                    <a href="https://edplivebands.edp.com/portugal/banda/palha-daco">Vota aqui!</a>
                </p>
            </div>
        )
    }
}

export default Home;