import React from "react"

class Home extends React.Component
{
    render() {

        return(
            <div className="home" style={{textAlign: "center"}}>
                <strong>Lançamento do álbum | AO VIVO NA VITEC</strong>
                <h2 style={{margin:0, padding:0}}>
                    "Juízo de Valor"
                </h2>
                <strong>-- 4 de Julho 2020 --</strong>
                <p>
                    <a href="https://www.facebook.com/palha.rocks">
                        <img className={"img-fluid"} style={{float: "left", width: "550px"}} src="/img/Post_Insta.jpg" />
                    </a>
                </p>
            </div>
        )
    }
}

export default Home;
