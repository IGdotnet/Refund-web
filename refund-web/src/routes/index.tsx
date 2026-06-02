import { BrowserRouter, Route } from "react-router";

import { AuthRoutes } from "./AuthRoutes";

import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes() {
    return (
        <BrowserRouter>
            <EmployeeRoutes />
        </BrowserRouter>
    )
}