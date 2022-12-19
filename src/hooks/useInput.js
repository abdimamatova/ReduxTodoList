import { useState } from 'react'

const useInput = (initialValue) => {
	const [enteredValue, setEnteredValue] = useState(initialValue)

	const changeValueHandler = (e) => {
		setEnteredValue(e.target.value)
	}
	return [enteredValue, changeValueHandler]
}

export default useInput
