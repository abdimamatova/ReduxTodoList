import React from 'react'
import { useForm } from 'react-hook-form'
// import useInput from '../hooks/useInput'

const CustomHooks = () => {
	// const [name, changeNameHandler] = useInput('')
	// const [amount, changeAmountHandler] = useInput(0)
	// const [date, changeDateHandler] = useInput('')

	const { register, handleSubmit, reset } = useForm()

	const submitHandler = (data) => {
		console.log(data)
		// fetch(url, {
		// 	method: 'POST',
		// 	headers: { 'Content-type': 'application/json' },
		// 	body: JSON.stringify(data),
		// })
		reset()
	}

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<input
				type='text'
				{...register('name', {
					required: true,
					validate: (v) => {
						return v.trim().length > 0
					},
					minLength: 6,
				})}
			/>
			<input type='number' {...register('amount')} />
			<input type='date' {...register('date')} />
			<button type='submit'>Add</button>
		</form>
	)
}

export default CustomHooks
