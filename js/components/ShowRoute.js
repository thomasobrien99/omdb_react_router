import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class ShowRoute extends Component{
	constructor(props){
		super(props)
		this.state = {
			movie : {title:'foo'}
		}
	}
	componentDidMount(){
		$.ajax(`http://www.omdbapi.com/?i=${this.props.params.id}&y=&plot=short&r=json`).then(movie=>{
			this.setState({movie})
		}).catch(err=>{console.log(err)})
	}
	render(){
		return(
			<div>
				Show Route
				{this.state.movie.Title}
				<Link to='/'>Search</Link>
			</div>
		)
	}
}

export default ShowRoute