 	import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class ShowRoute extends Component{
	constructor(props){
		super(props)
		this.state = {
			movie : {},
			loading: true
		}
	}
	componentDidMount(){
		$.ajax(`https://www.omdbapi.com/?i=${this.props.params.id}&y=&plot=full&r=json`).then(movie=>{
			this.setState({movie, loading: false})
		}).catch(err=>{console.log(err)})
	}
	render(){
		return(
			<div className='container'>
			{this.state.loading ? "Loading" : 
			<div className='col-sm-offset-2 col-sm-8 panel panel-success'>
				<div className='panel-heading search-form'>
					<h1>{this.state.movie.Title}</h1>
				</div>
				<div className='panel-body'>
					<table>
						<tbody>
							<tr>
								<td>
									<img src={this.state.movie.Poster}/>
								</td>
								<td>
									<h2>Plot</h2>
									<p>{this.state.movie.Plot}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='panel-footer'>
					<Link to='/omdb_react_router/'>Search</Link>
				</div>
			</div>}
			</div>
		)
	}
}

export default ShowRoute