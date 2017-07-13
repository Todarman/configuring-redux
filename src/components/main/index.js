import React,{Component} from 'react';

export default class Main extends Component{
	render(){
		return(
			<table className="table">
		  <thead>
		    <tr>
		      <th>Name</th>
		      <th>Age</th>
		      <th>Salary</th>
		      <th>Position</th>
		    </tr>
		  </thead>
		  <tbody>
		    {this.props.renderEmployees()}
		  </tbody>
		</table>
			)
	}
}