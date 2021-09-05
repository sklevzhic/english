import React, {useState} from 'react'
import {MainLayout} from "../../layouts/mainLayout";
import {Button, Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useRouter} from "next/router";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTodos} from "../../store/actions-creators/todos";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface ComponentProps {

}

const Level: React.FC<ComponentProps> = () => {
    const {sentences} = useTypedSelector(state => state.sentence)
    const [proffers, setProffers] = useState(sentences)
    const router = useRouter()
    return <MainLayout>
        <Grid>
            <Paper>
                <Typography>Английский</Typography>
                <Button variant={"contained"} color={"primary"} onClick={() => router.push("/tests/a0")}>Тест</Button>
                <ul>
                    {
                        proffers.map(el => {
                            return <li key={el.id}>{el.rus} - {el.eng}</li>
                        })
                    }
                </ul>
            </Paper>
        </Grid>
    </MainLayout>;
};

export default Level

export const getServerSideProps = wrapper.getServerSideProps(async ({params, store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTodos())
})

