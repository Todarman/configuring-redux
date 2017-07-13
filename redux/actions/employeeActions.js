export const loadEmployees = (name) => {
  return {
        // Unique identifier
        type: 'LOAD_EMPLOYEES',
        // Payload
        name:name
    }
};