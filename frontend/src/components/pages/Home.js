import React from 'react';
import './Home.css'; 
import MetaData from '../layout/MetaData';

const Home = () => {
    // Sample data for the last 3 game results
    const lastGames = [
        {
            team1Logo: './images/KB-Vellaznimi-logo.png',
            team2Logo: './images/KB-Vellaznimi-logo.png',
            opponent: 'Team A',
            score: '89 - 76',
            date: '2025-01-20',
        },
        {
            team1Logo: './images/KB-Vellaznimi-logo.png',
            team2Logo: './images/KB-Vellaznimi-logo.png',
            opponent: 'Team B',
            score: '78 - 85',
            date: '2025-01-18',
        },
        {
            team1Logo: './images/KB-Vellaznimi-logo.png',
            team2Logo: './images/KB-Vellaznimi-logo.png',
            opponent: 'Team C',
            score: '92 - 88',
            date: '2025-01-15',
        },
    ];

    return (
        <div className="home-background">
            <MetaData title={'KB Vëllaznimi'} />
            <div className="background-container">
                <h1 className="background-text">KB Vëllaznimi</h1>
            </div>

            <div className="results-container">
                <h1 className="results-heading">LAST GAMES RESULTS</h1>
                <div className="results-list">
                    {lastGames.map((game, index) => (
                        <div key={index} className="result-box">
                            <div className="logos">
                                <img src={game.team1Logo} alt="Team 1 Logo" className="team-logo" />
                                <span className="vs-text">VS</span>
                                <img src={game.team2Logo} alt="Team 2 Logo" className="team-logo" />
                            </div>
                            <p className="game-score"><strong>Score:</strong> {game.score}</p>
                            <p className="game-date"><strong>Date:</strong> {game.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
