import { Layout } from 'antd';
import React, {FC} from 'react';
import AppRouter from "./AppRouter";
import Navbar from '../Navbar/Navbar';
import './App.css'

const App:FC = () => {
  return (
    <Layout>
        <Navbar/>
        <Layout.Content>
            <AppRouter/>
        </Layout.Content>
    </Layout>
  );
}

export default App;
