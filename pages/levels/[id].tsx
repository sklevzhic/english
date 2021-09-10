import React, {useState} from 'react'
import {MainLayout} from "../../layouts/mainLayout";
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

        <ul>
            {
                proffers.map(el => {
                    return <li key={el.id}>{el.rus} - {el.eng}</li>
                })
            }
        </ul>
    </MainLayout>;
};

export default Level

export const getServerSideProps = wrapper.getServerSideProps(async ({params, store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTodos())
})

