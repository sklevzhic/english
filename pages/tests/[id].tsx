import React from 'react'
import {MainLayout} from "../../layouts/mainLayout";
import {fetchQuestions} from '../../store/actions-creators/todos';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {PageHeader, Row} from "antd";
import router from "next/router";
import SentencesItemTest from "../../components/SentancesItemTest";


interface ComponentProps {
    query: {
        id?: string,
        lesson?: string
    }
}

const Level: React.FC<ComponentProps> = ({query}) => {

    const {sentences} = useTypedSelector(state => state.sentence)
    return <MainLayout>
        <Row>
            <PageHeader
                className="site-page-header"
                onBack={() => router.push('/')}
                title={`Уровень ${query.id}`}
            />
        </Row>
        <>
            {
                sentences.map(el => {
                    return <SentencesItemTest key={el.id} id={+el.id} errors={el.errors}
                                          correctly={el.correctly}
                                          rus={el.rus} eng={el.eng}/>
                })
            }
        </>


    </MainLayout>;
};

export default Level

export const getServerSideProps = wrapper.getServerSideProps(async ({query, store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchQuestions(query.id as string, query.lesson as string))
    return {
        props: {
            query: query,
        }
    }
})