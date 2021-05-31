import { useState } from 'react'


const UpdateAddress = () => {
	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)

	const [age, setAge] = useState('')
	const [ageTouched, setAgeTouched] = useState(false)

	const [food, setFood] = useState('')
	const [foodTouched, setFoodTouched] = useState(false)

	const [loves, setLoves] = useState('')
	const [lovesTouched, setLovesTouched] = useState(false)



	
	let nameIsValid: boolean = true
	let nameErrorMessage: string = ''
	if( name === '' ) {
		nameIsValid = false
	
		nameErrorMessage = 'Pls type a name.'
	}
	// let nameClass = ''
	// if( nameTouched ) {
	// 	nameClass = (nameIsValid ? 'valid' : 'error')
	// }

	const allowedAgeCharacters = "+0123456789 -"
	let ageIsValid: boolean = true
	let ageErrorMessage: string = ''
	if( age === '' ) {
		ageIsValid = false
		ageErrorMessage = 'Pls type an age.'
	} else if( !age.split('').every(char => allowedAgeCharacters.includes(char)) ) {
		ageIsValid = false
		ageErrorMessage = 'Pls type an age with numbers.'
	}
	// let ageClass = ''
	// if( ageTouched ) {
	// 	ageClass = (ageIsValid ? 'valid' : 'error')
	// }

	let foodIsValid: boolean = true
	let foodErrorMessage: string = ''
	if( food === '' ) {
		foodIsValid = false
	
		foodErrorMessage = 'Pls type its favorite dish.'
	}

	let lovesIsValid: boolean = true
	let lovesErrorMessage: string = ''
	if( loves === '' ) {
		lovesIsValid = false
	
		lovesErrorMessage = 'Pls type hobby.'
	}


	let formIsInvalid = !nameIsValid || !ageIsValid


	return (
		<div className="update-form">
			<div>
				<label> Name:</label>
				<input type="text"
					onBlur={() => setNameTouched(true)}
					onChange={e => setName(e.target.value)}
					value={name}
					
				required />
			{nameTouched ? <div className="message"> {nameErrorMessage} </div> : null}
			</div> 

				<div>
					<label> Age:</label>
					<input type="text"
						onBlur={() => setAgeTouched(true)}
						onChange={e => setAge(e.target.value)}
						value={age}
				
					/>
					{ageTouched ? <div className="message"> {ageErrorMessage} </div> : null}
				</div>

				<div>
				<label> Favoritefood:</label>
				<input type="text"
					onBlur={() => setFoodTouched(true)}
					onChange={e => setFood(e.target.value)}
					value={food}
			
				 />
			{foodTouched ? <div className="message"> {foodErrorMessage} </div> : null}
			    </div> 
			
			<div>
					<label> Loves:</label>
					<input type="text"
						onBlur={() => setLovesTouched(true)}
						onChange={e => setLoves(e.target.value)}
						value={age}
						
					/>
					{lovesTouched ? <div className="message"> {lovesErrorMessage} </div> : null}
			</div>
			<div>
					<button disabled={formIsInvalid}> Spara ändringar </button>
				</div>
			</div>
	
	)}

export default UpdateAddress

	

		{/* // 	const [inputText, setInputText] = useState('default')
		// 	const [uncontrolledText, setUncontrolledText] = useState('')
		// 	return(
		// <section>
		// <p>
		// 	<label>
	    //      Namn på hamster:
		// 	 <input onChange={event => {
		// 			console.log('Uncontrolled change', event.target.value);
		// 			setUncontrolledText(event.target.value)
		// 		}
		// 	} /> (uncontrolled)
		// 	</label>
		// 	<br/>
		// 	Du skrev: {uncontrolledText}
		// </p>

		// <label>
		// 	<p>
	    //      Ålder på hamster:
		// 	 <input onChange={event => {
		// 			console.log('Uncontrolled change', event.target.value);
		// 			setUncontrolledText(event.target.value)
		// 		}
		// 	} /> (uncontrolled)
		// 	</label>
		// 	<br/>
		// 	Du skrev: {uncontrolledText}
		// </p>

			{/* <form action="">
				<input type="text" placeholder="Name"/> <br/>
				<input type="text"placeholder="Age"/><br/>
				<input type="text"placeholder="Favfood"/><br/>
				<input type="text"placeholder="Loves"/><br/>
				<p>Här ska man kunna importera en img</p><br/>
			   <button type="submit" value ="submit">Add Hamster</button>
			</form> */}
// 		</section>
// 	)
// }

// export default Form */}