import './Header.css';
import puzzle from '../../assets/oh-my-word-puzzle.png';
const Header = ()=> {
  return (
    <h1 className="header">
      OH MY
      <img className="header-puzzle-w"
        src={puzzle}
      />
      ORD!
    </h1>
  )
}
export default Header;