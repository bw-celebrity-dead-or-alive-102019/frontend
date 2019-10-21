import React, { useEffect, useState } from "react";
import PictureCard from './PictureCard'

import axios from "axios";

export default function Picture() {
    const [pictureData, setPictureData] = useState([]);

    useEffect(() => {
        axios.get(`https://celebs-dead-or-alive.herokuapp.com/celebs`)
        .then(res => {
            console.log(res.data);
            setPictureData(res.data);
            console.log()

        })
        .catch(err => {
            console.log('data error', err)
        })
    }, [])
  
    return (
    <div>
            {/* {pictureData.map(item => {
                return <img alt="alt" src={item.image_url}/>
            })} */}

            {pictureData.map(item => {
                return (
                    <PictureCard 
                        key={item.id}
                        name={item.name}
                        image_url={item.image_url}
                    />
                )
            })}
        

        
    </div>
    );
  }
  