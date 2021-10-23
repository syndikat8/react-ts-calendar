import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import {useHistory} from 'react-router-dom';
import {RouteNames} from '../../router';

const Navbar: FC = () => {
    const router = useHistory()

    const goToLogin = () => {
        router.push((RouteNames.LOGIN))
    }
    const auth = true
    return (
        <Layout.Header>
            <Row justify="end">
                <>
                    {   auth &&
                        <div style={{color: 'white'}}>
                            Boss
                        </div>
                    }
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            key={1}
                            onClick={goToLogin}
                        >
                            {auth ? 'Logout' : 'Login'}
                        </Menu.Item>
                    </Menu>
                </>
            </Row>
        </Layout.Header>
    );
}

export default Navbar;
