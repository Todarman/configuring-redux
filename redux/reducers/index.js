import { combineReducers } from 'redux';
import employees from './employeeReducers'

export default combineReducers({
   employees:employees,
  // More reducers if there are
  // can go here
});