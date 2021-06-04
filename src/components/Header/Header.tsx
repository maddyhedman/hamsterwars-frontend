import './Header.css'
import { Link} from "react-router-dom";
// import Hamsterwars from '../img/home.jpg'
import Hamster from '../../img/hamsterimg.jpg';

const Header = () => {
	return (
	
		
		<header className="header">
			<div className="header-img">
			<Link to="/"><img src={Hamster} alt="img of hamster" /></Link>
			</div>
		 <nav>
		
      <Link to="/"> HOME </Link>
	  <Link to ="/battle">BATTLE</Link>
      <Link to="/gallery">GALLERY</Link>
      <Link to="/add-new">ADD NEW</Link>

      
	  </nav>
		</header>

	

	
	
	)
}

export default Header 