import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cards = (props) => {
    console.log(props)
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <div className='cards-container'>
            {
                cards.map((card) => <SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default Cards;