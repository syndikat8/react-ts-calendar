import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {privateRoutes, publicRoutes, RouteNames} from '../../router';

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)

    return (
        isAuth
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
