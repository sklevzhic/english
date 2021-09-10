import React from 'react'
import {MainLayout} from "../layouts/mainLayout";
import {Form, Input, Button, Checkbox, Card} from 'antd';
import classes from "../styles/Home.module.scss";

interface LoginPageProps {

}

export const LoginPage: React.FC<LoginPageProps> = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <div className={classes.loginbg}>
        <Card className={classes.formWrapper}>
            <div>
                image
            </div>
            <Form
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    </div>;
};

export default LoginPage