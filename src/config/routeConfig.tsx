import {RouteProps} from 'react-router-dom'
import {Rates} from "../page/Rates/Rates";
import {Calculator} from "../page/Calculator/Calculator";

export enum AppRoutes {
    RATES = 'rates',
    CALCULATOR = 'calculator'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.RATES]: '/',
    [AppRoutes.CALCULATOR]: '/calculator'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.RATES]: {
        path: RoutePath.rates,
        element: <Rates />,
    },
    [AppRoutes.CALCULATOR]: {
        path: RoutePath.calculator,
        element: <Calculator />,
    }
};
