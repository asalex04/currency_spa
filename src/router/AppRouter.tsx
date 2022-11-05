import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import {Loader} from "../components/Loader/Loader";

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<Loader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
