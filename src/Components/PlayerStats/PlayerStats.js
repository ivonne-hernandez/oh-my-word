import PropTypes from 'prop-types';
import './PlayerStats.css';

const PlayerStats = ({ playerStats }) => {
  const totalNumberOfWins = playerStats.filter(statistic => statistic.guessedWords.includes(statistic.word)).length;
  const averageWinPercentage = (totalNumberOfWins/playerStats.length).toFixed(2) * 100;
  const winsAndLossesForAllGames = playerStats.map(statistic => {
    if (statistic.guessedWords.includes(statistic.word)) {
      return "W";
    } else {
      return "L";
    }
  });

  const calculateMaxStreak = () => {
    const winStreaks = winsAndLossesForAllGames.join('').split('L').filter(str => str.includes("W"));
    const winLengths = winStreaks.map(streak => streak.length);
    const maxWinStreak = Math.max(...winLengths, 0);
    return maxWinStreak;
  }

  const calculateCurrentStreak = () => {
    //for the current streak, you'll want the last w's

  }

  return (
    <div className='player-stats-container'>
      <div className='player-stats-header'>STATISTICS</div>
      <div className='statistics-content-container'>
        <div className='statistic-container'>
          <div className='statistic'>{playerStats.length ? playerStats.length : 0}</div>
          <div className='statistic-label'>Played</div>
        </div>
        <div className='statistic-container'>
          <div className='statistic'>{playerStats.length ? averageWinPercentage : 0}</div>
          <div className='statistic-label'>Win %</div>
        </div>
        <div className='statistic-container'>
          <div className='statistic'>{playerStats.length ? calculateCurrentStreak() : 0}</div>
          <div className='statistic-label'>Current Streak</div>
        </div>
        <div className='statistic-container'>
          <div className='statistic'>{playerStats.length ? calculateMaxStreak() : 0}</div>
          <div className='statistic-label'>Max Streak</div>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats;

PlayerStats.propTypes = {
  playerStats: PropTypes.array.isRequired
}