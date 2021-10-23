import React, {FC} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from '../router';

const AppRouter: FC = () => {
    const auth = false
    return (
        auth
            ? <Switch>
                {privateRoutes.map(route =>
                   <Route
                       {...route}
                       key={route.path}
                   />
                )}
                <Redirect to={RouteNames.CALENDAR}/>
            </Switch>
            : <Switch>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    );
}

export default AppRouter;
