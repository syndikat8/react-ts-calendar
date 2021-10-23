import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import {useHistory} from 'react-router-dom';
import {RouteNames} from '../../router';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Navbar: FC = () => {
    const router = useHistory()

    const goToLogin = () => {
        router.push((RouteNames.LOGIN))
    }
    const {isAuth} = useTypedSelector(state => state.authReducer)

    return (
        <Layout.Header>
            <Row justify="end">
                <>
                    {isAuth &&
                    <div style={{color: 'white'}}>
                        Boss
                    </div>
                    }
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            key={1}
                            onClick={goToLogin}
                        >
                            {isAuth ? 'Logout' : 'Login'}
                        </Menu.Item>
                    </Menu>
                </>
            </Row>
        </Layout.Header>
    );
}

export default Navbar;
