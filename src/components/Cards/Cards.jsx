import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cards = ({handleBookMark}) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <div className='cards-container'>
            {
                cards.map(card => <SingleCard
                    key={card.id}
                     handleBookMark={handleBookMark} card={card}></SingleCard>)
            }
        </div>
    );
};

export default Cards;