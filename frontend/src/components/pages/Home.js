import React from 'react';
import './Home.css'; 
import MetaData from '../layout/MetaData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // For navigation to the Rezultatet page

    return (
        <div className="home-background">
            <MetaData title={'KB Vëllaznimi'} />
            <div className="background-container">
                <h1 className="background-text">KB Vëllaznimi</h1>
            </div>

            {/* Results Section */}
            <div className="results-container">
                <h1 className="results-heading">Last Games Results</h1>
                <div className="results-list">
                    {/* Example result boxes */}
                    <div className="result-box">
                        <div className="logos">
                            <img className="team-logo" src="./images/KB-Vellaznimi-logo.png" alt="Team 1" />
                            <span className="vs-text">VS</span>
                            <img className="team-logo" src="./images/KB-Vellaznimi-logo.png" alt="Team 2" />
                        </div>
                        <p className="game-score">87 - 72</p>
                        <p className="game-date">January 20, 2025</p>
                    </div>
                    <div className="result-box">
                        <div className="logos">
                            <img className="team-logo" src="./images/KB-Vellaznimi-logo.png" alt="Team 3" />
                            <span className="vs-text">VS</span>
                            <img className="team-logo" src="./images/KB-Vellaznimi-logo.png" alt="Team 4" />
                        </div>
                        <p className="game-score">95 - 89</p>
                        <p className="game-date">January 18, 2025</p>
                    </div>
                    <div className="result-box">
                        <div className="logos">
                            <img className="team-logo" src="./images/KB-Vellaznimi-logo.png" alt="Team 5" />
                            <span className="vs-text">VS</span>
                            <img className="team-logo" src="./images/KB-Vellaznimi-logo.png" alt="Team 6" />
                        </div>
                        <p className="game-score">78 - 82</p>
                        <p className="game-date">January 15, 2025</p>
                    </div>
                </div>

                {/* Button to navigate to Rezultatet */}
                <div className="results-button-container">
                    <button
                        className="results-button"
                        onClick={() => navigate('/rezultatet')}
                    >
                        Shiko te gjitha rezultatet
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Home;