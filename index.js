

const employee = { 
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, name, value) {
    return {...employee,
        [name]: value
    }
}

  function destructivelyDeleteFromEmployeeByKey(employee, name, value) {
    employee[name] = value
    return employee
  }
  