import React from 'react';
import './Home.css'; // Ensure to update CSS for the new styles
import MetaData from '../layout/MetaData';

const Home = () => {
    return (
        <div className="home-background">
            <MetaData title={'KB Vëllaznimi'} />
            <div className="background-container">
                <h1 className="background-text">Welcome to KB Vëllaznimi</h1>
            </div>
        </div>
    );
};

export default Home;
