import React, {useState} from 'react'
import {Card, Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import styles from '../styles/Home.module.scss'
import SubMenu from 'antd/lib/menu/SubMenu';

const {Header, Sider, Content} = Layout;

interface MainLayoutProps {

}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    const [isCollapsed, setUsCollapsed] = useState<boolean>(false)

    const toggle = () => {
        setUsCollapsed(!isCollapsed);
    };

    return <Layout>
        <Sider trigger={null} collapsible collapsed={isCollapsed}>
            <div className="logo"/>
            <div className={styles.munuButton}>
                {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Теория">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UserOutlined />} title="Практика">
                    <Menu.Item key="4">option1</Menu.Item>
                    <Menu.Item key="5">option2</Menu.Item>
                    <Menu.Item key="6">option3</Menu.Item>
                    <Menu.Item key="7">option4</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
        <Layout className="site-layout">
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