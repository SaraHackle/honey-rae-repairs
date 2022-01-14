import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeList = () => {
  const [employees, assignEmployees] = useState([]);
  const [specialties, addSpecialty] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then((employeeArray) => {
        assignEmployees(employeeArray);
      });
  }, []);

  useEffect(() => {
    const specialtyList = employees.map((employee) => employee.specialty);
    addSpecialty(specialtyList.join(", "));
  }, [employees]);

  return (
    <>
      <div>
        <button onClick={() => history.push("/employees/create")}>
          Hire Employee
        </button>
      </div>
      <div>Specialties: {specialties} </div>
      {employees.map((employeeObject) => {
        return (
          <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
        );
      })}
    </>
  );
};
