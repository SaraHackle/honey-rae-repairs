import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { TicketList } from "./serviceTickets/TicketList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { Ticket } from "./serviceTickets/Ticket";
import { Employee } from "./employees/Employee";

export const ApplicationViews = () => {
  return (
    <>
      <Route path="/customers">
        <h3> Customers: </h3>
        <CustomerList />
      </Route>
      <Route exact path="/employees">
        <h3> Employees: </h3>
        <EmployeeList />
      </Route>
      <Route exact path="/employees/:employeeId(\d+)">
        <Employee />
      </Route>
      <Route exact path="/tickets">
        <h3> Service Tickets: </h3>
        <TicketList />
      </Route>
      <Route exact path="/tickets/:ticketId(\d+)">
        <Ticket />
      </Route>
      <Route path="/tickets/create">
        <TicketForm />
      </Route>
      <Route path="/employees/create">
        <EmployeeForm />
      </Route>
    </>
  );
};
