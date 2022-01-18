import { useNavigate } from 'react-router-dom';
import puzzle from '../../assets/oh-my-word-puzzle.png';
import questionMarkIcon from '../../assets/how-to-play-button.png';
import playerStatsIcon from '../../assets/stats-button.png';
import './Header.css';

const Header = ()=> {
  let navigate = useNavigate();

  return (
    <div className='header-container'>
      <div className="question-mark-icon-container">
        <img 
          className="question-mark-icon"
          src={questionMarkIcon}
          alt="how to play navigation icon"
          onClick={() => navigate("/how-to-play")}
        />
      </div>
      <div className="app-name-container">
        <h1 className="header-text">
          OH MY  
          <img className="header-puzzle-w"
            src={puzzle}
            onClick={() => navigate("/")}
          />
          ORD!
        </h1>
      </div>
      <div className="player-stats-icon-container">
        <img 
          className="player-stats-icon"
          src={playerStatsIcon}
          alt="player stats navigation icon"
          onClick={() => navigate("/player-stats")}
        />
      </div>
    </div>
  );
}
export default Header;