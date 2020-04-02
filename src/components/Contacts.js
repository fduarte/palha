import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contacts extends React.Component
{
    render() {
        return (
            <div className="contacts">
                <h1>Email</h1>
                <FontAwesomeIcon icon={['fas', 'envelope']} /> sobreviver97@gmail.com
            </div>
        );
    }
}

export default Contacts;