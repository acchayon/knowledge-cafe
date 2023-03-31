import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import SingleCard from '../SingleCard/SingleCard';

const Cards = ({handleMarkAtRead}) => {
    const [cards, setCards] = useState([]);
    const [cliked, setClicked] = useState([])
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    const handleBookmMarkTitle = (click) => {
        console.log(click)
        const newClick = [...cliked , click];
        setClicked(newClick);
    }

    return (
        <div className='cards-container'>
            {
                cards.map(card => <SingleCard
                    key={card.id}
                     handleMarkAtRead={handleMarkAtRead} 
                     card={card}
                     handleBookmMarkTitle={handleBookmMarkTitle}
                     ></SingleCard>)
                     
            }
            {
               cliked.map(clicks => <SideCart
                handleBookmMarkTitle={handleBookmMarkTitle}
               ></SideCart>) 
            }
        </div>
    );
};

export default Cards;