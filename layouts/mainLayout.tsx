import React, {useState} from 'react'
import {Button, Card, Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    UserOutlined,
} from '@ant-design/icons';
import styles from '../layouts/mainLayout.module.scss'
import router from "next/router";

const {SubMenu} = Menu;
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
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={isCollapsed}
            >
                <Menu.Item
                    disabled={true}
                    key="1"
                    icon={<MailOutlined />}
                    onClick={() => router.push(`/parser`)}
                >
                    Parser
                </Menu.Item>
                <Menu.Item
                    disabled={true}
                    key="4"
                    icon={<MailOutlined />}
                    onClick={() => router.push(`/login`)}
                >
                    Login
                </Menu.Item>
                <SubMenu key="sub1" icon={<PieChartOutlined/>} title="Теория">
                    <SubMenu key="sub3" title="A0">
                        <Menu.Item onClick={() => router.push(`/level/a0?lesson=2`)} key="11">+Урок 2</Menu.Item>
                        <Menu.Item onClick={() => router.push(`/level/a0?lesson=4`)} key="122">+Урок 4</Menu.Item>
                        <Menu.Item onClick={() => router.push(`/level/a0?lesson=6`)} key="133">+Урок 6</Menu.Item>
                        <Menu.Item onClick={() => router.push(`/level/a0?lesson=8`)} key="144">+Урок 8</Menu.Item>
                        <Menu.Item onClick={() => router.push(`/level/a0?lesson=10`)} key="155">+Урок 10</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title="A1">
                        <Menu.Item key="13">Option 11</Menu.Item>
                        <Menu.Item key="14">Option 12</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title="A2">
                        <Menu.Item key="15">Option 11</Menu.Item>
                        <Menu.Item key="16">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub23" icon={<PieChartOutlined/>} title="Практика">
                    <SubMenu key="sub7" title="A0">
                        <Menu.Item key="111">Option 11</Menu.Item>
                        <Menu.Item key="112">Option 12</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub8" title="A1">
                        <Menu.Item key="113">Option 11</Menu.Item>
                        <Menu.Item key="114">Option 12</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub9" title="A2">
                        <Menu.Item key="115">Option 11</Menu.Item>
                        <Menu.Item key="116">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
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