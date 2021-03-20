import React, {useState} from 'react'
import Avocado from '../images/avocado.jpg';
import Clothes from '../images/clothes.jpg';
import House from '../images/house.jpg';
import Pepper from '../images/pepper.jpg';
import Rocks from '../images/rocks.jpg';

import './Carousel.scss'

export const Carousel = () => {

    const pictureArr = [Avocado, Clothes, House, Pepper, Rocks];

    console.log(pictureArr);

    const [position, setPosition] = useState(0);
    
    const incrementLeft = () => {
        setPosition(position === 0 ? pictureArr.length - 1 : position - 1);
    }

    const incrementRight = () => {
        setPosition(position === pictureArr.length - 1 ? 0 : position + 1);
    }

    return (
        <div className="carousel-wrapper">
            {pictureArr.map((pic, index) => 

                <div key={index} className={index === position ? "visible" : "hidden"}>
                    <img className="img" src={pic} alt={`image ${index}`}/>
                </div>
            )}

            <div className="carousel-actions">
                <button className="left-increment" onClick={incrementLeft}>
                    <i className="fas fa-arrow-left"></i>
                </button>   
                <button className="right-increment" onClick={incrementRight}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
