import {useState} from 'react'
import {MainLayout} from "../layouts/mainLayout";
import {Form, Button, Checkbox, Card} from 'antd';
import classes from "../styles/Home.module.scss";
import { Input } from 'antd';
const { TextArea } = Input;

interface LoginPageProps {

}

export const LoginPage: React.FC<LoginPageProps> = () => {
    const [text, setText] = useState<string>('')

    const arrayWordsToString = (array) => {
        return array.map((el,i) => {
            if ((array[i] === ' ') && (array[i+1] === ' ') && (array[i+2] === ' ')) {
                return '.'
            } else {
                return el
            }
        }).join("").replace(/\.+/g, '.').replace(/ {2,}/g, '').split('.').filter(n => n)
    }

    const onFinish = (values: any) => {
        localStorage.setItem('test', JSON.stringify(values.username));
        let str: string[] = values.username.replace(/\[.*?\]/g, '').replace(/[0-9]/g, '').trim().split('')
        let arrENG = []
        let arrRUS = []
        const regexRUS = /^[-а-яА-Я]$/;
        const regexENG = /^['a-zA-Z]$/;
        str.forEach(elem => {
            if (elem === ' ') {
                arrENG.push(elem)
                arrRUS.push(elem)
            } else {
                if (elem.match(regexENG)) {
                    arrENG.push(elem)
                }
                else if (elem.match(regexRUS)) {
                    arrRUS.push(elem)
                }
            }

        })
        const arrayStrRUS = arrayWordsToString(arrRUS)
        const arrayStrENG = arrayWordsToString(arrENG)

        let result = arrayStrENG.map((el,i) => {
            return {
                rus: arrayStrRUS[i],
                eng: arrayStrENG[i],
                lesson: values.lesson,
                level: values.level,
                id: `lvl${values.level}l${values.lesson}`
            }
        })
        setText(result)
    };

    const jsonToText = (obj) => {
        return JSON.stringify(obj).substring(1, JSON.stringify(obj).length-1)
    }

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
                    <TextArea className={classes.widthInput} rows={4} defaultValue={`1 У меня нет каких-либо вопросов I don't have any questions [z] [ai dəvnt hæv 'eni 'kwestfənz] 2 Она не знает ответа She doesn't know the answer [si : daznt nəv ði 'a : nsə] 3 У меня нет времени I don't have time`}></TextArea>
                     </Form.Item>
                <Form.Item
                    label="Lesson"
                    name="lesson"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Level"
                    name="level"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Button onClick={() => {navigator.clipboard.writeText(jsonToText(text))}}>Copy</Button>
            <ul>
                {
                    Object.keys(text).map((el,i) => {
                        return <li>{text[el].rus} - {text[el].eng} </li>
                    })
                }
            </ul>

        </Card>

    </div>;
};

export default LoginPage