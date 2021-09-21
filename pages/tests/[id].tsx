import React, {useEffect, useMemo, useState} from 'react'
import {MainLayout} from "../../layouts/mainLayout";
import classes from '../../styles/Test.module.scss'
import {changeCount, fetchTodos} from '../../store/actions-creators/todos';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {useActions} from '../../hooks/useActions';
import {Button, Card, Input, PageHeader, Row} from "antd";
import router from "next/router";


interface ComponentProps {
    query: {
        id?: string,
        lesson?: string
    }
}

const Level: React.FC<ComponentProps> = ({query}) => {

    const {sentences} = useTypedSelector(state => state.sentence)
    const [proffers, setProffers] = useState(sentences)
    const [text, setText] = useState("")
    const [result, setResult] = useState("")
    const [isVisibleAnswer, setIsVisibleAnswer] = useState<boolean>(false)
    const {changeCount} = useActions()
    useEffect(() => {
        setProffers(sentences)
    }, [sentences])
    const number = useMemo(() => {
        return Math.floor(Math.random() * proffers.length)
        setText("")
    }, [proffers])
    const checkAnswer = () => {
        if (text.toLowerCase().trim() === (proffers[number].eng).toLowerCase().trim()) {
            setResult(`очень даже правильно - [${(proffers[number].eng)}] `)
            let value = proffers[number].correctly || 0
            changeCount(proffers[number].id, "correctly", value + 1)
            setText('')
            setIsVisibleAnswer(false)
        } else {
            setResult('debil')
            let value = proffers[number].correctly || 0
            changeCount(proffers[number].id, "errors", value + 1)
        }
    }
    return <MainLayout>
        <Row gutter={16}>
            <PageHeader
                className="site-page-header"
                onBack={() => router.push('/level/a0')}
                title={`Уровень ${query.id}, урок ${query.lesson}`}
                subTitle={<Button onClick={() => router.push('/tests/a0')}>Проверить знания</Button>}
            />
        </Row>

        <Card title={proffers[number].rus}>
            <p>Правильные ответы - {proffers[number].correctly || 0}</p>
            <p>Ошибки - {proffers[number].errors || 0}</p>
            <Input value={text} placeholder="Введите ответ" onChange={(e) => setText(e.target.value)} />
            <Button onClick={checkAnswer} type="primary">Проверить</Button>
            <Button onClick={checkAnswer} type="primary">Следующий</Button>

            {
                isVisibleAnswer
                    ? <p  onClick={() => setIsVisibleAnswer(!isVisibleAnswer)}>{proffers[number].eng}</p>
                    : <Button onClick={() => setIsVisibleAnswer(!isVisibleAnswer)} type="primary">Answer</Button>
            }

            <p>{result}</p>
        </Card>

    </MainLayout>;
};

export default Level

export const getServerSideProps = wrapper.getServerSideProps(async ({query,store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTodos(query.id as string, query.lesson as string))
    return {
        props: {
            query: query,
        }
    }
})