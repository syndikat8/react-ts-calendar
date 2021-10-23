import React from "react";
import Login from "../pages/Login/Login";
import Calendar from "../pages/Calendar/Calendar";

export interface IRoute {
    path: string,
    component: React.ComponentType,
    exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    CALENDAR = '/'
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        component: Login,
        exact: true
    }
]

export const privateRoutes: IRoute[] = [
    {
        path: RouteNames.CALENDAR,
        component: Calendar,
        exact: true
    }
]