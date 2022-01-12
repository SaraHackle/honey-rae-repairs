import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList";


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
            <h3> Customers: </h3>
                <CustomerList />
            </Route>
            <Route path="/employees">
                <h3> Employees: </h3>
                    <EmployeeList />
            </Route>
            <Route path="/tickets">
               <h3> Service Tickets: </h3>
                    <TicketList />
            </Route>
        </>
    )
}