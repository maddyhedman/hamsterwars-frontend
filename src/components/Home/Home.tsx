import Hamster from '../../img/home.jpg';
import './Home.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const Home = () => {
	return(
	
		<div>
		<h1>What is Lorem Ipsum?
     	Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		 </h1>
		<h2>
		Här kan du spela om den sötaste hamstern men du kan även se alla tillgängliga hamstrar och lägga till egna
		</h2>

		<Link to="/battle"><button>BATTLE</button></Link>
	    <Link to="/gallery"><button>GALLERY</button>  </Link>   
		<img src={Hamster} alt="img of hamster" className="Hamster-img"/>
		</div>

	)
}

export default Home 