import React, {useState} from 'react'
import {Button, Card, Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import styles from '../layouts/mainLayout.module.scss'
import SubMenu from 'antd/lib/menu/SubMenu';
import router from "next/router";

const {Sider, Content} = Layout;

interface MainLayoutProps {

}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    const [isCollapsed, setUsCollapsed] = useState<boolean>(true)
    const [isAuth, setIsAuth] = useState<boolean>(true)

    const toggle = () => {
        setUsCollapsed(!isCollapsed);
    };

    return <Layout>
        {isAuth && <Sider trigger={null} collapsible collapsed={isCollapsed}>
            <div className="logo"/>
            <div className={styles.munuButton}>
                {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
            </div>
            <Button onClick={() => router.push(`/`)}>Home</Button>
            <Button onClick={() => router.push(`/parser`)}>добавить фразы</Button>
            <Button onClick={() => router.push(`/login`)}>login</Button>
        </Sider>}
        <Layout className={`site-layout ${styles.bg}`}>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: '100vh',
                }}
            >
                {children}
            </Content>
        </Layout>
    </Layout>
};