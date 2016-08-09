import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class SearchRoute extends Component{
	constructor(props){
		super(props)
		this.state = {
			movies : [],
			query : '',
			noResults: false
		}
	}
	render(){
		return(
			<div>
				<h1>Search OMDB</h1>
				<form onSubmit={(e)=>this._handleSubmit(e)}>
					<input 
						type="text" 
						placeholder="Search..."
						onChange={(e)=>{this.setState({query: e.target.value})}}/>
					<input 
						type ="submit" 
						value="Search OMDB" />
				</form>
				<Link to='/show'>Show Route</Link>
				{this.state.movies.map((el, key)=>{
					return this._renderMovieRow(el, key);
				})}
				{this._renderNoResultsMessage()}
			</div>
		)
	}
	_renderNoResultsMessage(){
		if (this.state.noResults)
		{
			return (
				<h2>Your Search Returned No Results!</h2>
			)
		}
	}
	_handleSubmit(e){
		e.preventDefault();
		$.ajax(`http://www.omdbapi.com/?s=${this.state.query}&y=&plot=short&r=json`).then((res)=>{
			if(res.Search){
				this.setState({movies: res.Search, noResults:false})
			}
			else{
				this.setState({movies: [], noResults:true})
			}
		}).catch(err=>{console.log(err)})
	}
	_renderMovieRow(movie, key){
		return (
			<li key={key}>
				<Link to={`/${movie.imdbID}`}>
					{movie.Title}
				</Link>
			</li>
		)
	}
}

export default SearchRoute