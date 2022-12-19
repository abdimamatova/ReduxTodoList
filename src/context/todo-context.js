import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../App'

export const TodoContext = React.createContext()

const TodoContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([])

	const getAllTodos = async () => {
		const response = await fetch(`${BASE_URL}/todos.json`)
		const result = await response.json()
		if (result) {
			const transformedResult = Object.keys(result).reduce((acc, key) => {
				return [...acc, { id: key, ...result[key] }]
			}, [])
			setTodos(transformedResult)
		}
	}

	useEffect(() => {
		getAllTodos()
	}, [])

	return (
		<TodoContext.Provider
			value={{
				todos: todos,
				getAllTodos: getAllTodos,
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoContextProvider
