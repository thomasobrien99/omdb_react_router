import React, {Component} from 'react'
import {Link} from 'react-router'
import ShortMoviePanel from './ShortMoviePanel'
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
			<div className="container">
				<div className="page-header">
					<h1>Search OMDB</h1>
				</div>
				<div className="search-form-box">
					<form className="search-form" onSubmit={(e)=>this._handleSubmit(e)}>
						<input 
								type="text" 
								placeholder="Search..."
								onChange={(e)=>{this.setState({query: e.target.value})}}/>
						<br/>
						<br/>
						<input 
								type ="submit" 
								value="Search OMDB" />
					</form>
				</div>
				<br/>
				<br/>
				<br/>
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
				<div className="page-header">
					<h2>Your Search Returned No Results!</h2>
				</div>
			)
		}
	}
	_handleSubmit(e){
		e.preventDefault();
		$.ajax(`https://www.omdbapi.com/?s=${this.state.query}&y=&plot=short&r=json`).then((res)=>{
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
			<ShortMoviePanel movie={movie} key={key} num={key+1} />
		)
	}
}

export default SearchRoute