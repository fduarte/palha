import React from "react";
import data from "../data/data"
import { LanguageContext } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Shows extends React.Component
{

    static contextType = LanguageContext;

    render() {
        const lang = this.context.lang;

        return(
            <div className="shows">
                {data[lang].shows.map((show, index) => {

                    let showDate = new Date(show.date);
                    let showYear = showDate.getFullYear();
                    let showMonth = showDate.getMonth() + 1;
                    let showDay = showDate.getDate();

                    showDay = showDay > 9 ? showDay : "0" + showDay;
                    showMonth = showMonth > 9 ? showMonth : "0" + showMonth;

                   return <div>
                       <h4><FontAwesomeIcon icon={['fas', 'calendar-alt']} /> {showYear}-{showMonth}-{showDay}</h4>
                       <h3>{show.title}</h3>
                       <p className="small"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> {show.location}</p>
                       <p>{show.description}</p>
                   </div>
                })}
            </div>
        )
    }

}

export default Shows;


