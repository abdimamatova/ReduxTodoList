import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'

export const UsersContext = React.createContext({
	users: [],
})

const reducerFn = (state, action) => {
	if (action.type === 'GET_ALL_USERS') {
		const copyOfState = action.payload
		return copyOfState
	}
	return state
}

export const UsersContextProvider = ({ children }) => {
	const [usersTwo, dispatch] = useReducer(reducerFn, [])
	useEffect(() => {
		const promise = fetch('https://jsonplaceholder.typicode.com/users')

		promise
			.then((response) => {
				return response.json()
			})
			.then((result) =>
				dispatch({ type: 'GET_ALL_USERS', payload: result }),
			)
	}, [])
	return (
		<UsersContext.Provider
			value={{
				users: usersTwo,
			}}
		>
			{children}
		</UsersContext.Provider>
	)
}
