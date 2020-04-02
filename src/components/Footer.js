import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
   render() {
       return (
           <footer className="mastfoot mt-auto text-center">
               <div className="inner">
                   <p>
                       © 2020 Palha d'Aço<br />
                       <FontAwesomeIcon icon={['fab', 'bandcamp']} /> <a href="https://sobreviver.bandcamp.com/releases">BandCamp</a>
                       &nbsp;&nbsp;<FontAwesomeIcon icon={['fab', 'youtube']} /> <a href="https://www.youtube.com/channel/UCJv-pj7qaoBGzyekXbqW6fQ">YouTube</a> <br />
                       <FontAwesomeIcon icon={['fab', 'facebook']} /> <a href="https://www.facebook.com/PalhaDAcoTerceira">Facebook</a>
                       &nbsp;&nbsp;<FontAwesomeIcon icon={['fab', 'instagram']} /> <a href="https://www.instagram.com/palha_daco">Instagram</a> <br />
                       <FontAwesomeIcon icon={['fas', 'envelope']} /> sobreviver97@gmail.com
                   </p>
               </div>
           </footer>
       )
   }
}

export default Footer;