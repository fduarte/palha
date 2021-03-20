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
                            2021-03-16 <br />
                            Palha d'Aço no programa <a href="https://www.youtube.com/watch?v=-OddgwfZYLU">"Aromas da Nossa Terra"</a>, na <a href="https://www.facebook.com/locsao2017/">RÁDIO SONS DO SUL</a>, na companhia de muitos e bons nomes do Metal Lusitano.
                        </li>
                        <li className="list-group-item">
                            2021-03-12 <br />
                            <a href="https://www.youtube.com/watch?v=IvDlnCXo8eE">Entrevista no YouTube</a> com <a href="https://www.facebook.com/jorge.caldeira.142">Jorge Caldeira</a> no programa Catedral do Rock (<a href="https://www.facebook.com/popularfmportugal">Popular FM</a>).
                        </li>
                        <li className="list-group-item">
                            2021-03-11 <br />
                            O nosso Punk-Metal divulgado no <a href="https://www.facebook.com/pedrademetal/photos/a.489340958741/10158380824383742/">Pedra de Metal</a>.
                        </li>
                        <li className="list-group-item">
                            2021-03-09 <br />
                            O "Silêncio Frio" e a "Janela Suja" passaram no novo podcast do <a href="https://museuhmazores.bandcamp.com/track/metaleiro-lusitano-2021mar06-varios">Museu do Heavy Metal Açoriano, Metaleiro Lusitano</a>.
                        </li>
                        <li className="list-group-item">
                            2021-03-08 <br />
                            Palha d'Aço no <a href="https://www.facebook.com/sosmetalradio.show/photos/a.163041407068085/3978776728827848/">S.O.S. Heavy-Metal Radio Show</a>, com o <a href="https://www.facebook.com/imperatore696">Filipe Marta</a>, na <a href="https://www.facebook.com/antenaminho">Antena Minho</a>.
                        </li>
                        <li className="list-group-item">
                            2021-02-26 <br />
                            O tema "Silêncio Frio" passou no episódio 2 do podcast <a href="https://www.mixcloud.com/miguel-correia8/metal-zone-2">Metal Zone</a> de Miguel Correia.
                        </li>
                        <li className="list-group-item">
                            2021-02-13 <br />
                            Entrevista ao blog <a href="https://musicazores.blogspot.com/2021/02/palha-daco-e-banda-acoriana-em-destaque.html">Mais Música</a>.
                        </li>
                        <li className="list-group-item">
                            2021-02-07 <br />
                            Entrevista à <a href="http://www.revistalusitania.pt/files/LUSITANIA6.pdf">Revista Lusitânia</a>.
                        </li>
                        <li className="list-group-item">
                            2021-02-06 <br />
                            Palha d'Aço no <a href="https://museuhmazores.bandcamp.com/track/nova-desordem">Museu do Heavy Metal Açoriano</a> de <a href="https://www.facebook.com/museuHEAVYMETALacoriano">Mário Lino</a>.
                        </li>
                        <li className="list-group-item">
                            2021-01-28 <br />
                            Entrevista ao <a href="https://www.facebook.com/acores.hoje/videos/766389253978852">Açores Hoje</a> com <a href="https://www.facebook.com/solange.vieira.98478">Solange Vieira</a>.
                        </li>
                        <li className="list-group-item">
                            2020-08-28 <br />
                            "Juízo de Valor" no
                            <a href="https://www.rtp.pt/play/p254/e484081/alta-tensao?fbclid=IwAR2hbWztckzKaNsbB53u0EdMS4FPtZyAC_JZjadhqeG6MI9Jrs9LymnSsro"> Alta Tensão</a> de <a href="https://www.facebook.com/antoniofreitas.antena3">António Freitas</a>.
                        </li>
                        <li className="list-group-item">
                            2020-07-10 <br />
                            O tema "Nova Desordem" passou na emissão 220 do <a href="https://cascaisgarage.pt/emissao-220/">Cascais Garage</a>, de Cláudio Silva, com bandas como Dela Marmy,
                            Time For T, The Tourist, Layover, Ah Nuc, <a href="https://www.facebook.com/kumpanialgazarra">Kumpania Algazarra</a>, Pop Dell Arte, Never End, Meric, Cicatriz, Banda Zé Ninguém, MAGO.
                        </li>
                        <li className="list-group-item">
                            2020-07-04 <br /> Concerto de Lançamento do novo álbum <a href="https://www.youtube.com/watch?v=_YbMHscfIxw">"Juízo de Valor" na VITEC</a>.
                        </li>
                        <li className="list-group-item">
                            2020-07-04 <br /> Entrevista sobre o "Passado, Presente, Futuro" - <a href="https://pedalameobombo.blogspot.com/2020/07/ppf-3-palha-daco.html">Pedala-me o Bombo</a>.
                        </li>
                        <li className="list-group-item">
                            2020-06-29 <br /> O single "Nova Desordem" foi divulgado na <a href="https://www.facebook.com/hintf.webzine/posts/1443024922552328">Hintf Webzine</a>, de Mário Filipe Pires.
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
