import React, { useEffect, useState } from "react";

export const  CustomerList = () => {
  const [customers, assignCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/customers")
      .then((res) => res.json())
      .then((customerArray) => {
        assignCustomers(customerArray);
      });
  }, []);

  return (
    <>
      <h2>Customer List</h2>

      {customers.map((customerObject) => {
        return <h3 key= {`customer--${customerObject.id}`}>{customerObject.name}</h3>;
      })}
    </>
  );
};