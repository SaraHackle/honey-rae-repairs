import React, { useEffect, useState } from "react";

export const EmployeeList = () => {
  const [employees, assignEmployees] = useState([]);
  const [specialties, addSpecialty] = useState("");

  useEffect(() => {
      fetch("http://localhost:8088/employees")
        .then((res) => res.json())
        .then((employeeArray) => {
          assignEmployees(employeeArray);
        });
      }, 
    []
  );

  useEffect(() => {
      const specialtyList = employees.map((employee) => employee.specialty);
      addSpecialty(specialtyList.join(", "));
      },
   [employees]
  );

  return (
    <>
      <div>Specialties: {specialties} </div>
      {employees.map((employeeObject) => {
        return (
          <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
        );
      })}
    </>
  );
};
