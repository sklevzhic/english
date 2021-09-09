import React, {useEffect, useMemo, useState} from 'react'
import {MainLayout} from "../../layouts/mainLayout";
import classes from '../../styles/Test.module.scss'
import {changeCount, fetchTodos} from '../../store/actions-creators/todos';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {useActions} from '../../hooks/useActions';
import Filters from "../../components/Filters";
import {Button, Card, Input} from "antd";


interface ComponentProps {

}

const Level: React.FC<ComponentProps> = () => {

    const {sentences} = useTypedSelector(state => state.sentence)
    const [proffers, setProffers] = useState(sentences)
    const [text, setText] = useState("")
    const [result, setResult] = useState("")

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
        } else {
            setResult('debil')
            let value = proffers[number].correctly || 0
            /*            changeCount(proffers[number].id, "errors", value + 1)*/
        }
    }
    return <MainLayout>
        <Card title={proffers[number].rus}>
            <Input value={text} placeholder="Введите ответ" onChange={(e) => setText(e.target.value)} />
            <Button onClick={checkAnswer} type="primary">Default</Button>
            <p>{result}</p>
        </Card>

    </MainLayout>;
};

export default Level

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTodos())
})
