import loading from '../../assets/loading-icon.png';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading-container'>
      <img 
        className='loading-image'
        src={loading}
        alt='loading'
      />
    </div>
  );
}

export default Loading;