// include React and React.Component which is what our components inherit from
import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import SearchRoute from './SearchRoute'
import ShowRoute from './ShowRoute'
// go grab our dumb component (notice the relative path - we NEED that or else it looks in node_modules)

// create a component
class App extends Component {
    // instance method render
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/omdb_react_router/' component={SearchRoute} />
        
      </Router>
    )
  }
}

// export this component to be used somewhere else (we could have done export default class App above as well)
export default App