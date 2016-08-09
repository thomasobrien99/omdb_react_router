// bring in our App component to be placed in the DOM
import App from './components/App'
// bring in React
import React from 'react'
// bring in ReactDOM.render (using destructuring)
import {render} from 'react-dom'
// just like we have seen before - put the component on the page!

render(<App/>, document.getElementById("container"))