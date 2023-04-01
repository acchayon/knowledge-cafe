import React, { useEffect, useState } from 'react';

const SideCart = (props) => {
    const clicks = props.clicks;
    const readTime = props.readTime;
    const [times, setTimes] = useState(readTime)
    useEffect(() => {
        const getReadTime = localStorage.getItem("seeMin");
        setTimes(getReadTime)
    }, [readTime])
    return (
        <div className='side-cart text-center'>
            <h5 className='fw-bold bg-info p-3'>Spend time on read: {times} min</h5>
            <h5 className='fw-bold bg-info mt-3 p-3'>Bookmarks Blogs: {props.length} </h5>
            <h3 className='bg-info p-3'>{clicks}</h3>
        </div>
    );
};

export default SideCart;