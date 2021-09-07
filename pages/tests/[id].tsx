import React, {useEffect, useMemo, useState} from 'react'
import {MainLayout} from "../../layouts/mainLayout";
import {Grid, Paper, Typography, Input, Button} from "@material-ui/core";
import classes from '../../styles/Test.module.scss'
import {changeCount, fetchTodos} from '../../store/actions-creators/todos';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {useActions} from '../../hooks/useActions';
import Filters from "../../components/Filters";


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
        <Filters/>
        <Grid>
            <Paper className={classes.wrapper}>
                <Typography>
                    {proffers[number].level}, {proffers[number].lesson}
                </Typography>
                <Typography>Ошибок - {proffers[number].errors} </Typography>
                <Typography>Ошибок - {proffers[number].correctly} </Typography>
                <Typography className={classes.text} variant={"h6"}>{proffers[number].rus}</Typography>
                <Input multiline fullWidth value={text} className={classes.input}
                       onChange={(e) => setText(e.target.value)}/>
                <Button onClick={checkAnswer} variant={"contained"} color={"primary"}>Проверить</Button>
                <p>{result}</p>
            </Paper>

        </Grid>
    </MainLayout>;
};

export default Level

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTodos())
})
