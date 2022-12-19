import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
// import TodoContextProvider from './context/todo-context'
// import Reducer from './components/Reducer'
import CustomHooks from './components/CustomHooks'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
)
