import React from 'react';
import './SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({card, handleBookMark}) => {

    return (
        <div>
            <div className='card-container'>
                <div className='all-card card'>
                    <div className='cover-img'>
                        <img className='w-100' src={card.coverImg} alt="" />
                    </div>
                    <div className='author-section row align-items-center grid'>
                        <div className='mt-2 col-md-6'>
                            <img className='w-25 authorImg' src={card.authorImg} alt="" />
                        </div>
                        <div className='author-info col-md-3'>
                            <h5 className='fw-bold'>{card.authorName}</h5>
                            <p>{card.date}</p>
                        </div>
                        <div className='col-md-3'>
                            <p>{card.readTime} min read <a  href="#"><FontAwesomeIcon icon={faBookmark} /></a></p>
                        </div>
                    </div>
                    <div className='title'>
                        <h2 className='fw-bold'>{card.title}</h2>
                    </div>
                    <div>
                        <p>#beginners &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  #programming</p>
                    </div>
                    <a onClick={()=> handleBookMark(card.readTime)} href="#">Mark at read</a>

                </div>
            </div>
        </div>
    );
};

export default SingleCard;


// {/* <Card style={{ width: '42rem' }}>
//                 <Card.Img variant="top" src={card.coverImg} />
//                 <Card.Body>
//                     <Card.Title>{card.title}</Card.Title>
//                     <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                     </Card.Text>
//                 </Card.Body>
                
//                 <Card.Body>
//                     <Card.Link href="#">Mark as read</Card.Link>
//                 </Card.Body>
//             </Card> */}