import React, { useEffect } from 'react'

const Card = () => {
	// useEffect(() => {
	// 	let controller = new AbortController()
	// 	fetch(`url`, {
	// 		signal: controller.signal,
	// 	})
	// 	return () => {
	// 		controller.abort()
	// 	}
	// }, [])
	return <div>Card</div>
}

export default React.memo(Card)
