import './Gallery.css'
import { useEffect, useState } from 'react'
import { Hamster } from '../../types/Hamster'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




const Gallery = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)

	 async function getHamsters() {
            const response = await fetch('/hamsters', { method: 'GET' })
            const data: Hamster[] = await response.json()
            setHamsters(data)
		}
		

	
        
	

	useEffect(() => {
       
        getHamsters()
        
	}, [])

    async function deleteHamsters(id:string) {
		const response = await fetch('/hamsters/' + id, { method: 'DELETE' })
           
			getHamsters()
			
        }
     

	return (
		<div>
			<Link to="/add-hamster"><button>Add Hamster</button></Link>
			<section className="container">
				
			{hamsters ? hamsters.map(hamster => (
					<div key={hamster.id}>
						<div className="image">
						<img className="img" src={`/img/img/${hamster.imgName}`}  alt="hamster bild"/>
							<div className="infoOnHover">
							<p>Age: {hamster.age}</p>
							<p>Favfood:{hamster.favfood}</p>
							<p>Loves:{hamster.loves}</p>
							<p>Defeats:{hamster.defeats}</p>
							<p>Games{hamster.games}</p>
							</div>
						</div> <br/>
						<p><strong>Hover over for info</strong></p>
						<button onClick= {() => deleteHamsters(hamster.id)}><strong>REMOVE</strong></button>
						<p>{hamster.name} </p><br/>
						
						
					</div>
				))
				:  'Hämtar hamsters från API...'
			}
			</section>
		</div>
	)
}

export default Gallery