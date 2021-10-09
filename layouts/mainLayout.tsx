import React, {useState} from 'react'
import {Button, Card, Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ForkOutlined,
    HomeOutlined,
    FileAddOutlined
} from '@ant-design/icons';
import styles from '../layouts/mainLayout.module.scss'
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
            <Menu
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={isCollapsed}
            >
                <Menu.Item
                    key="2"
                    icon={<HomeOutlined />}
                    onClick={() => router.push(`/`)}
                >
                    Home
                </Menu.Item>
                <Menu.Item
                    disabled={true}
                    key="1"
                    icon={<FileAddOutlined />}
                    onClick={() => router.push(`/parser`)}
                >
                    Фильтрация текста
                </Menu.Item>
                <Menu.Item
                    key="4"
                    icon={<ForkOutlined />}
                    onClick={() => router.push(`/regulations`)}
                >
                    Формула
                </Menu.Item>

            </Menu>

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