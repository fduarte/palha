import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Home extends React.Component
{
    render() {

        return(
            <div className="home align-content-center text-center">
                <div>
                    <strong>Novo álbum</strong>
                    <h2 style={{margin:0, padding:0}}>
                        <a href="https://www.youtube.com/watch?v=ZcaI65W0YpA&list=PLKhqkUVfeCKRIYBoq3X4XSuAmXW17DA3e">"Juízo de Valor"</a>
                    </h2>
                    <strong>-- 4 de Julho 2020 --</strong>
                    <div className="border rounded text-uppercase p-3">
                        <FontAwesomeIcon icon='arrow-alt-circle-down' /> <a href="https://drive.google.com/drive/folders/1UTYN5fdrM9auzHGVRMkVdV_Vsd_SdiOC">PRESS KIT "JUÍZO DE VALOR"</a>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        <div className="p-2">
                            <FontAwesomeIcon icon={['fab', 'youtube']} /> <a href="https://www.youtube.com/watch?v=ZcaI65W0YpA&list=PLKhqkUVfeCKRIYBoq3X4XSuAmXW17DA3e">YouTube</a>
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={['fab', 'spotify']} /> <a href="https://open.spotify.com/artist/0RpR8P9fCOkPUvP2d7bHh6">Spotify</a>
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={['fab', 'apple']} /> <a href="https://music.apple.com/pt/album/ju%C3%ADzo-de-valor/1524073184">Apple Music</a>
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={['fab', 'deezer']} /> <a href="https://www.deezer.com/pt/album/161670082">Deezer</a>
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={['fab', 'bandcamp']} /> <a href="https://palha.bandcamp.com/">BandCamp</a>
                        </div>
                    </div>
                    <p>
                        <a href="https://www.facebook.com/palha.rocks">
                            <img className={"img-fluid"} style={{width: "550px"}} src="/img/Post_Insta.jpg" />
                        </a>
                    </p>
                </div>
                <div className="text-left mt-2 ml-1">
                    <ul className="list-group list-group-flush list-group">
                        <li className="list-group-item">
                            2021-02-13 <br />
                            Entrevista ao blog <a href="https://musicazores.blogspot.com/2021/02/palha-daco-e-banda-acoriana-em-destaque.html">Mais Música</a>
                        </li>
                        <li className="list-group-item">
                            2021-02-07 <br />
                            Entrevista à <a href="http://www.revistalusitania.pt/files/LUSITANIA6.pdf">Revista Lusitânia</a>
                        </li>
                        <li className="list-group-item">
                            2021-02-06 <br />
                            Palha d'Aço no <a href="https://museuhmazores.bandcamp.com/track/nova-desordem">Museu do Heavy Metal Açoriano</a> de <a href="https://www.facebook.com/museuHEAVYMETALacoriano">Mário Lino</a>
                        </li>
                        <li className="list-group-item">
                            2021-01-28 <br />
                            Entrevista ao <a href="https://www.facebook.com/acores.hoje/videos/766389253978852">Açores Hoje</a> com <a href="https://www.facebook.com/solange.vieira.98478">Solange Vieira</a>
                        </li>
                        <li className="list-group-item">
                            2020-08-28 <br />
                            "Juízo de Valor" no
                            <a href="https://www.rtp.pt/play/p254/e484081/alta-tensao?fbclid=IwAR2hbWztckzKaNsbB53u0EdMS4FPtZyAC_JZjadhqeG6MI9Jrs9LymnSsro"> Alta Tensão</a> de <a href="https://www.facebook.com/antoniofreitas.antena3">António Freitas</a>
                        </li>
                        <li className="list-group-item">
                            2020-07-10 <br />
                            O tema "Nova Desordem" passou na emissão 220 do <a href="https://cascaisgarage.pt/emissao-220/">Cascais Garage</a>, de Cláudio Silva, com bandas como Dela Marmy,
                            Time For T, The Tourist, Layover, Ah Nuc, <a href="https://www.facebook.com/kumpanialgazarra">Kumpania Algazarra</a>, Pop Dell Arte, Never End, Meric, Cicatriz, Banda Zé Ninguém, MAGO.
                        </li>
                        <li className="list-group-item">
                            2020-07-04 <br /> Concerto de Lançamento do novo álbum <a href="https://www.youtube.com/watch?v=_YbMHscfIxw">"Juízo de Valor" na VITEC</a>
                        </li>
                        <li className="list-group-item">
                            2020-07-04 <br /> Passado, Presente, Futuro - <a href="https://pedalameobombo.blogspot.com/2020/07/ppf-3-palha-daco.html">Pedala-me o Bombo</a>
                        </li>
                        <li className="list-group-item">
                            2020-06-27 <br /> Palha d’Aço lançam single de estreia do novo álbum “Juízo de Valor” - <a href="https://portugarte.pt/2020/06/27/palha-daco-lancam-single-de-estreia-do-novo-album-juizo-de-valor/">Portugarte</a>
                        </li>
                        <li className="list-group-item">
                            2020-04-21 <br />
                            Participação infrutífera no Concurso <a href="https://edplivebands.edp.com/portugal/banda/palha-daco">EDP LIVE BANDS</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;
