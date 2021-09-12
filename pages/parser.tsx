import React, {useState} from 'react'
import {MainLayout} from "../layouts/mainLayout";
import {Form, Input, Button, Checkbox, Card} from 'antd';
import classes from "../styles/Home.module.scss";

interface LoginPageProps {

}

export const LoginPage: React.FC<LoginPageProps> = () => {
    const [text, setText] = useState<string>('')

    const onFinish = (values: any) => {
        let str: string[] = values.username.replace(/\[.*?\]/g, '').replace(/[0-9]/g, '').trim().split('')
        const eng = (elem: string) => {
            const regexENG = /^['a-zA-Z]$/;
            const regexRUS = /^[-а-яА-Я]$/;
            const regexSPACE = /^[\s]$/;

            if (elem.match(regexENG)) {
                return "eng"
            }
            else if (elem.match(regexRUS)) {
                return "rus"
            }
            else if (elem.match(regexSPACE)) {
                return "space"
            }
        }
        let b: string[] = []
        str.forEach((el,i ) => {
            if ((eng(str[i]) === eng(str[i+1])) || (eng(str[i]) === eng(str[i+2]))) {
                if ( eng(str[i]) === 'rus' ) {
                    b.push(str[i])
                }
            } else {
                console.log(false)
            }

        })
        console.log(b)
        // setText()
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
                    <Input
                        defaultValue={`1 У меня нет каких-либо вопросов I don't have any questions [z] [ai dəvnt hæv 'eni 'kwestfənz] 2 Она не знает ответа She doesn't know the answer [si : daznt nəv ði 'a : nsə] 3 У меня нет времени I don't have time`}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <p>
                {text}
            </p>
        </Card>

    </div>;
};

export default LoginPage