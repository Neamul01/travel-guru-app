import React from 'react';
import './Home.css'
import image from '../../images/Rectangle 1.jpg'

const Home = () => {
    return (
        <div className=' home-custom ' style={{ backgroundImage: `url(${image})` }}>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;