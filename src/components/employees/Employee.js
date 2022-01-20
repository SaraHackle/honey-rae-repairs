import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Employee = () => {
  const [employee, set] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8088/employees/${employeeId}`)
      .then((data) => data.json())
      .then(set);
  }, [employeeId]);

  return (
    <>
      <section className="employee">
        <h3 className="employee_description">{employee.name}</h3>
        <div className="specialty">Specialty: {employee.specialty}</div>
      </section>
    </>
  );
};
