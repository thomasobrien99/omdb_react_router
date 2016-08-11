import React, {Component} from 'react';
import {Link} from 'react-router';

class ShortMoviePanel extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="panel panel-primary">
				<div className="panel-heading">
				Search Result #{this.props.num}
				</div>
				<div className="panel-body">
					<img src={this.props.movie.Poster} style={{width:100+'px', height: 145+'px'}} />
					<ul className="pull-right">
						<li>Title: {this.props.movie.Title}</li>
						<li>Year: {this.props.movie.Year}</li>
					</ul>
				</div>
				<div className="panel-footer">
				  <Link to={`/omdb_react_router/${this.props.movie.imdbID}`}>
				  	<div className="btn btn-default">
				  		More Details
				  	</div>
				  </Link>
				</div>
			</div>
			)
	}
}

export default ShortMoviePanel