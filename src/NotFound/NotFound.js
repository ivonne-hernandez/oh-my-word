import './NotFound.css';

const NotFound = () => {
  return (
    <div className='invalid-route-container'>
      <p className='page-not-found-message'>
        404: Page was not found.
      </p>
      <p className='click-on-puzzle-message'>
        Click on the puzzle piece to navigate back to the homepage.
      </p>
    </div>
  );
}
export default NotFound;