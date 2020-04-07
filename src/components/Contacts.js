import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contacts extends React.Component
{
    render() {
        return (
            <div className="contacts">
                <h2>Email</h2>
                <FontAwesomeIcon icon={['fas', 'envelope']} /> palha.rocks@gmail.com
            </div>
        );
    }
}

export default Contacts;