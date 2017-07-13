import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as employeeActions from '../../../redux/actions/employeeActions';

 class EmployeeSearch extends Component{
	constructor(props){
		super(props);
		this.state={
			name:""
		}
	}
	componentWillMount() {
	}
	handleChange(event) {
	    this.setState({name: event.target.value});
	      this.props.loadEmployees(event.target.value);
	  }
	render() {
	return(
		<input type="search" value={this.state.name} onChange={this.handleChange.bind(this)}/>
		)
	}
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    AppState: state.employees
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    loadEmployees: (name) => dispatch(employeeActions.loadEmployees(name))
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeSearch);