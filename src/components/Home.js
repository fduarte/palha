import React from "react"

class Home extends React.Component
{
    render() {

        return(
            <div className="home align-content-center text-center">
                <div>
                    <strong>Lançamento do álbum</strong>
                    <h2 style={{margin:0, padding:0}}>
                        <a href="https://www.youtube.com/watch?v=ZcaI65W0YpA&list=PLKhqkUVfeCKRIYBoq3X4XSuAmXW17DA3e">"Juízo de Valor"</a>
                    </h2>
                    <strong>-- 4 de Julho 2020 --</strong>
                    <br />
                    Disponível no <a href="https://www.youtube.com/watch?v=ZcaI65W0YpA&list=PLKhqkUVfeCKRIYBoq3X4XSuAmXW17DA3e">YouTube</a>
                    <p>
                        <a href="https://www.facebook.com/palha.rocks">
                            <img className={"img-fluid"} style={{width: "550px"}} src="/img/Post_Insta.jpg" />
                        </a>
                    </p>
                </div>
                <div className="text-left mt-5 ml-3">
                    <h2 className="text-center">MEDIA</h2>
                    <ul>
                        <li>
                            Concerto de Lançamento do novo álbum <a href="https://www.youtube.com/watch?v=_YbMHscfIxw">"Juízo de Valor" na VITEC</a>
                        </li>
                        <li>
                            Passado, Presente, Futuro - <a href="https://pedalameobombo.blogspot.com/2020/07/ppf-3-palha-daco.html">Pedala-me o Bombo</a>
                        </li>
                        <li>
                            Palha d'Aço lançam single de estreia do novo álbum "Juízo de Valor" - <a href="https://portugarte.pt/2020/06/27/palha-daco-lancam-single-de-estreia-do-novo-album-juizo-de-valor/">Portugarte</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;
