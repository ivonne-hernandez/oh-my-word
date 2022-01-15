import './Header.css';
import puzzle from '../../assets/oh-my-word-puzzle.png';
const Header = ()=> {
  return (
    <h1 className="header">
      Oh my 
      <img className="header-puzzle-w"
        src={puzzle}
      />
      ord!
    </h1>
  );
}
export default Header;