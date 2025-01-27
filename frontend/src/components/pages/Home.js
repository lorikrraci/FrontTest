import React from 'react';
import './Home.css'; 
import MetaData from '../layout/MetaData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // For navigation to the Rezultatet page

    const topPerformers = [
        { 
            title: 'Best Overall Stats', 
            name: 'John Doe', 
            position: 'Forward', 
            stat: '25.4 PPG', 
            image: '/path-to-image/john-doe.jpg' 
        },
        { 
            title: 'Most Points Per Game', 
            name: 'Jane Smith', 
            position: 'Guard', 
            stat: '20.3 PPG', 
            image: '/path-to-image/jane-smith.jpg' 
        },
        { 
            title: 'Most Assists Per Game', 
            name: 'Chris Evans', 
            position: 'Point Guard', 
            stat: '8.7 APG', 
            image: '/path-to-image/chris-evans.jpg' 
        },
        { 
            title: 'Most Rebounds Per Game', 
            name: 'Alex Johnson', 
            position: 'Center', 
            stat: '12.4 RPG', 
            image: '/path-to-image/alex-johnson.jpg' 
        },
        { 
            title: 'Most Blocks Per Game', 
            name: 'Emily Davis', 
            position: 'Power Forward', 
            stat: '3.2 BPG', 
            image: '/path-to-image/emily-davis.jpg' 
        }
    ];
    
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
                        onClick={() => navigate('/stats')}
                    >
                        Shiko te gjitha rezultatet
                    </button>
                </div>
            </div>
             {/* Top Performers Section */}
             <div className="performers-section">
                <h1 className="performers-heading">Top Performers</h1>
                <div className="performers-cards">
                    {topPerformers.map((player, index) => (
                        <div className="performer-card" key={index}>
                            <img src={player.image} alt={player.name} className="performer-image" />
                            <h3 className="performer-title">{player.title}</h3>
                            <p className="performer-name">{player.name}</p>
                            <p className="performer-position">{player.position}</p>
                            <p className="performer-stat">{player.stat}</p>
                        </div>
                    ))}
                </div>
                <button 
                    className="squad-button" 
                    onClick={() => (window.location.href = '/klubi')}
                >
                    Squad
                </button>
            </div>
        </div>
    );
};
export default Home;