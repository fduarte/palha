import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
   render() {
       return (
           <footer className="mastfoot mt-auto text-center">
               <div className="inner">
                   <p>
                       © 2020 Palha d'Aço<br />
                       <FontAwesomeIcon icon={['fab', 'bandcamp']} /> <a href="https://palha.bandcamp.com/releases">BandCamp</a>
                       &nbsp;&nbsp;<FontAwesomeIcon icon={['fab', 'youtube']} /> <a href="https://www.youtube.com/channel/UC5wYkK3oB4XCHzapPo-7mrw">YouTube</a> <br />
                       <FontAwesomeIcon icon={['fab', 'facebook']} /> <a href="https://www.facebook.com/palha.rocks">Facebook</a>
                       &nbsp;&nbsp;<FontAwesomeIcon icon={['fab', 'instagram']} /> <a href="https://www.instagram.com/palha_daco">Instagram</a> <br />
                       <FontAwesomeIcon icon={['fas', 'envelope']} /> palha.rocks@gmail.com
                   </p>
               </div>
           </footer>
       )
   }
}

export default Footer;