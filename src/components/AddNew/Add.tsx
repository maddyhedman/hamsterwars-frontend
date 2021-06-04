import { useState } from 'react'

import { Hamster } from '../../types/Hamster'
import './Add.css'
// import   {Button}  from '../button/Button'


const Add = () => {
	const id = ''

	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)

	const [age, setAge] = useState('')
	const [ageTouched, setAgeTouched] = useState(false)

	const [food, setFood] = useState('')
	const [foodTouched, setFoodTouched] = useState(false)

	const [loves, setLoves] = useState('')
	const [lovesTouched, setLovesTouched] = useState(false)

	const [img, setImg] = useState('')
	const [imgTouched, setImgTouched] = useState(false)






	let nameIsValid: boolean = true
	let nameErrorMessage: string = ''
	if( name === '' ) {
		nameIsValid = false

		nameErrorMessage = 'Pls type a name.'
	}


	const allowedAgeCharacters = "0123456789"
	let ageIsValid: boolean = true
	let ageErrorMessage: string = ''
	if( age === '' ) {
		ageIsValid = false
		ageErrorMessage = 'Pls type an age.'

	} else if( !age.split('').every(char => allowedAgeCharacters.includes(char)) ) {
		ageIsValid = false
		ageErrorMessage = 'Pls type an age with numbers.'
	}


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

	let imgIsValid: boolean = true
	let imgErrorMessage: string = ''
	if( img === '' ) {
		imgIsValid = false
		imgErrorMessage = 'No image.'
	}
	let imgClass = '';
	if(imgTouched) {
		imgClass= (imgIsValid ? 'valid' : 'error') 
	} 


	let formIsInvalid = !nameIsValid || !ageIsValid || !foodIsValid || !lovesIsValid ||!imgIsValid



	async function Add() {
		let data: Hamster = {
			id: id,
			name: name,
			age: Number(age),
			favFood: food,
			loves: loves,
			imgName: img,
			wins: 0,
			defeats: 0,
			games: 0,

		}
        const response = await fetch('/hamsters' , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data) });
        	
        	

        return response.json();

      
    }
	

	return (
		<div className="add-form">
			<div className="right-box">
				<label className="label"> Name:</label>
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
						value={loves}

					/>
					{lovesTouched ? <div className="message"> {lovesErrorMessage} </div> : null}
			</div>
			<div>
					<label> Img:</label>
					<input 
						type="text"
						onBlur={() => setImgTouched(true)}
						onChange={e => setImg(e.target.value)}
						value={img}
						className={imgClass}

					/>
					{imgTouched ? <div className="message"> {imgErrorMessage} </div> : null}
			</div>
			<div>
				<button className="home-button" onClick={() => Add() } disabled={formIsInvalid}  > Save  </button>
				
				</div>
			</div>

	)}

export default Add




