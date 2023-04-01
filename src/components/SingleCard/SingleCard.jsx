import React from 'react';
import './SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';


const SingleCard = (props) => {
    // console.log(props)
    const card = props.card;
    const handleMarkAtRead = props.handleMarkAtRead;
    const handleBookmMarkTitle = props.handleBookmMarkTitle;
    const handleToast = () => toast("Wow you add bookmark!");

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
                            <p onClick={handleToast} >{card.readTime} min read <a  onClick={() => handleBookmMarkTitle(card.title)} href="#"><FontAwesomeIcon icon={faBookmark} /></a></p>
                        </div>
                    </div>
                    <div className='title'>
                        <h2 className='fw-bold'>{card.title}</h2>
                    </div>
                    <div>
                        <p>#beginners &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  #programming</p>
                    </div>
                    <a onClick={()=> handleMarkAtRead(card.readTime)} href="#">Mark at read</a>

                </div>
            </div>
        </div>
    );
};

export default SingleCard;


