const employeesData = [{
        name:"Vishnuprasad",
        age:25,
        skills:["react","react-native","javascript","wordpress","html","css"],
        salary:3.2,
        position:"Front End Developer"
    },
    {
        name:"Stephen Gasper",
        age:25,
        skills:["react","javascript","wordpress","html","css"],
        salary:4,
        position:"Front End Team Leader"
    },
    {
        name:"Karthik Thayyil",
        age:28,
        skills:["Laravel","javascript","wordpress","html","css"],
        salary:3.2,
        position:"Backend Developer"
    }];

export default (state={employees:employeesData,initialEmployees:employeesData}, action) => {
  switch (action.type){
    case 'LOAD_EMPLOYEES':
        var search = (Data,name)=>{

            var updatedList = Data.employees;
            if (name == "") 
            {
                updatedList = Data.initialEmployees;
                return updatedList;
            }
            else{
                updatedList = updatedList.filter(function(item){
                  return item.name.toLowerCase().search(
                    name.toLowerCase()) !== -1;
                });
                return updatedList;
            }
          };
      return Object.assign(...state, {
        initialEmployees: state.initialEmployees,
        employees: search(state,action.name)
      })
    default:
          return state;
  }
};