import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const EmployeeForm = () => {
  const [employee, assignEmployee] = useState({
    name: "",
    specialty: "",
  });

  const history = useHistory();

  const saveEmployee = (event) => {
    event.preventDefault();

    const newEmployee = {
      name: employee.name,
      specialty: employee.specialty,
    };

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    };

    return fetch("http://localhost:8088/employees", fetchOption).then(() => {
      history.push("/employees");
    });
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm_title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(event) => {
              const copy = { ...employee };
              copy.name = event.target.value;
              assignEmployee(copy);
            }}
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="First and Last Name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="specialty">Specialty:</label>
          <input
            onChange={(event) => {
              const copy = { ...employee };
              copy.specialty = event.target.value;
              assignEmployee(copy);
            }}
            type="text"
          />
        </div>
      </fieldset>
      <fieldset>
        <button className="btn btn-hire" onClick={saveEmployee}>
          Finish Hire
        </button>
      </fieldset>
    </form>
  );
};
