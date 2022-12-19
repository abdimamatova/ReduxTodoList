import React from 'react'

const Button = (props) => {
	// const creatColor = () => {
	// 	if (color === 'red') {
	// 		return { background: 'red' }
	// 	}
	// 	if (color === 'blue') {
	// 		return { background: 'blue' }
	// 	}
	// 	return {}
	// }
	console.log(props)
	return <button>{props.children}</button>
}

export default Button
