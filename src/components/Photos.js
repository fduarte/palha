import React from "react";
import data from "../data/data";

class Photos extends React.Component
{

    render() {

        let photos = [
            // shows
            'shows-cartaz-disgraca-2018.jpg',
            'shows-cartaz-festas-lameirinho-2017.jpg',
            'shows-cartaz-natal-backstage-2017.jpg',
            'palha-lancamento-2.jpg',
            'palha-sobreviver-cartaz-2016.jpg',
            'shows-cartaz-24-abril-v2.jpg',

            // disgraça 2018
            'shows-disgraca-2018.jpg',
            'shows-disgraca-2018-2.jpg',
            'shows-disgraca-2018-3.jpg',
            'shows-disgraca-2018-4.jpg',
            'shows-disgraca-2018-5.jpg',
            'shows-disgraca-2018-7.jpg',
            'shows-disgraca-2018-8.jpg',

            // angraock 2014
            'palha-angrarock-2014-vitor.jpg',
            'palha-angrarock-2014-freddy.jpg',
            'palha-angrarock-2014.png',
            'palha-angrarock-2014-2.jpg',
            'palha-angrarock-2014-3.jpg',
            'palha-angrarock-2014-15.jpg',
            'palha-angrarock-2014-17.jpg',
            'palha-angrarock-2014-18.jpg',
            'palha-angrarock-2014-23.jpg',
            'palha-angrarock-2014-9.jpg',

            // sobreviver 2016
            'palha-sobreviver-2016-7.jpg',
            'palha-sobreviver-2016-6.jpg',
            'palha-sobreviver-2016.jpg',
            'palha-sobreviver-2016-2.jpg',
            'palha-sobreviver-2016-3.jpg',
            'palha-sobreviver-2016-4.jpg',
            'palha-sobreviver-2016-5.jpg',


            // angrarock 2016
            'palha-angrarock-2016.jpg',
            'palha-angrarock-2016-2.jpg',

            // shredding night IV 2014
            'palha-estiva-shredding-nightIV-2014.jpg',

            // desconcertante 2014
            'palha-freddy-viali-casa-sal-2014.jpg',

            // unborn 2015
            'palha-unborn-fest-2015.jpg',

            // kit 2015
            'shows-kit.jpg',
            'shows-kit-1.jpg',
            'shows-kit-2.jpg',
            'shows-kit-3.jpg',
            'shows-kit-4.jpg',
            'shows-kit-5.jpg',
            'shows-kit-6.jpg',


            // photoshoot 2014
            'palha-2014.jpg',
            'palha-2014-2.jpg',
            'palha-2014-3.jpg',
            'palha-2014-4.jpg',
            'palha-2014-5.jpg',

            // early days
            'palha-2004.jpg'

        ];

        return(
            <div className="photos">
                {photos.map((photo, index) => {
                    let photoUrl = "/img/" + photo;
                        return <a href={photoUrl}><img className="col-6 mb-4" src={photoUrl} /></a>

                })}
            </div>
        );

    }
}

export default Photos;


