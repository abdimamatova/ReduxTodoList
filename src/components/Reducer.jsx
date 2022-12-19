import React, { useState } from 'react'
import { useReducer } from 'react'

const DELETE_KEY = 'DELETE'

const reducerFn = (prevState, action) => {
	if (action.type === 'ADD') {
		const newTodos = [...prevState.todos, action.payload]
		return {
			...prevState,
			todos: newTodos,
		}
	}
	if (action.type === DELETE_KEY) {
		const newTodos = prevState.todos.filter(
			(todo) => todo.id !== action.payload,
		)
		return {
			...prevState,
			todos: newTodos,
		}
	}
	if (action.type === 'COMPLETE') {
		const newTodos = prevState.todos.map((todo) => {
			if (todo.id === action.payload) {
				return { ...todo, completed: !todo.completed }
			}
			return todo
		})
		return {
			...prevState,
			todos: newTodos,
		}
	}
	return prevState
}

const initialState = {
	todos: [],
	counter: 0,
	token: null,
}

const Reducer = () => {
	const [state, dispatch] = useReducer(reducerFn, initialState)
	console.log(state)
	const [title, setTitle] = useState('')

	const changeHandler = (e) => {
		setTitle(e.target.value)
	}

	const addTodoHandler = async () => {
		const newTodo = {
			title: title,
			completed: false,
			id: Math.random().toString(),
		}
		dispatch({ type: 'ADD', payload: newTodo })
		setTitle('')
	}

	const deleteTodoHandler = async (id) => {
		dispatch({ type: DELETE_KEY, payload: id })
	}

	const completeTodoHandler = (id) => {
		dispatch({ type: 'COMPLETE', payload: id })
	}

	return (
		<>
			<input value={title} type='text' onChange={changeHandler} />
			<button onClick={addTodoHandler}>add todo</button>
			<ul>
				{state.todos.map((todo) => (
					<li key={todo.id}>
						<span>{todo.title}</span>
						<input
							type='checkbox'
							checked={todo.completed}
							onChange={() => completeTodoHandler(todo.id)}
						/>
						<button onClick={() => deleteTodoHandler(todo.id)}>
							delete
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Reducer
