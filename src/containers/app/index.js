import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as employeeActions from '../../../redux/actions/employeeActions';
import EmployeeSearch from '../../../src/components/employeesearch';
import Main from '../main';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			name:"Vishnuprasad",
			employees:[<tr key="noemployees"><td>No employees found</td></tr>],
		}
	}
	componentwillMount(props){
		
	}
	renderEmployees(props){
		let employeeJSX = [];
		this.props.AppState.employees.map((employee)=>{
			employeeJSX.push(<tr key={employee.name}>
				      <td>{employee.name}</td>
				      <td>{employee.age}</td>
				      <td>{employee.salary}</td>
				      <td>{employee.position}</td>
				    </tr>)});
		return employeeJSX;
	}
	render(){
		return(<div className="app-container container">
			<h2>Find Employees</h2>
			<div className="search-section">
				<EmployeeSearch/>
			</div>
			<div className="employees-container">
				<Main renderEmployees={this.renderEmployees.bind(this)}/>
			</div>
		</div>)
	}
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    AppState: state.employees
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    loadEmployees: (name) => dispatch(employeeActions.loadEmployees(name))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(App);