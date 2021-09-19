import React, {useEffect, useState} from 'react'
import {MainLayout} from "../../layouts/mainLayout";

import {Card, Col, List, PageHeader, Row} from 'antd';
import router from "next/router";
import {NextThunkDispatch, wrapper} from '../../store';
import {fetchTodos} from '../../store/actions-creators/todos';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SentencesItem from '../../components/SentancesItem';

interface ComponentProps {
    query: {
        id?: string,
        lesson?: string
    }
}

const LevelItem: React.FC<ComponentProps> = ({query}) => {

    const {sentences} = useTypedSelector(state => state.sentence)

    const [activeLesson, setActiveLesson] = useState(query.lesson || null)
    const [activeLevel, setActiveLevel] = useState(query.id || null)

    useEffect(() => {
        setActiveLesson(query.lesson || null)
        setActiveLevel(query.id || null)
    }, [query])
    const lessons = [
        {level: "a0", lesson: "2", title: "was/were"},
        {level: "a0", lesson: "4", title: "to be"},
        {level: "a0", lesson: "6", title: "to be"},
        {level: "a0", lesson: "8", title: "to be"},
        {level: "a0", lesson: "10", title: "to be"},
        {level: "a0", lesson: "12", title: "to be"},
        {level: "a0", lesson: "14", title: "to be"},
        {level: "a0", lesson: "16", title: "to be"},
        {level: "a0", lesson: "18", title: "to be"},
        {level: "a0", lesson: "20", title: "to be"},
        {level: "a0", lesson: "22", title: "to be"},
        {level: "a0", lesson: "24", title: "to be"},
        {level: "a0", lesson: "26", title: "to be"},
        {level: "a0", lesson: "28", title: "to be"},
        {level: "a0", lesson: "30", title: "to be"},
        {level: "a0", lesson: "32", title: "to be"},
        {level: "a0", lesson: "34", title: "to be"},
        {level: "a0", lesson: "36", title: "to be"},
        {level: "a0", lesson: "38", title: "to be"},
        {level: "a0", lesson: "40", title: "to be"},
        {level: "a0", lesson: "42", title: "to be"},
        {level: "a0", lesson: "44", title: "to be"},
        {level: "a0", lesson: "46", title: "to be"},
        {level: "a0", lesson: "48", title: "to be"},
        {level: "a0", lesson: "50", title: "to be"},
    ]

    // const [showAllLessons, setShowAllLessons] = useState<boolean>(true)

    const handleShowLevels = (el: { level: string, lesson: string }) => {
        router.push(`/level/${el.level}?lesson=${el.lesson}`)
    }
    return <MainLayout>
        <div>
            <div className="site-card-wrapper">
                {
                    !activeLesson
                        ? <Row gutter={16}>
                            {
                                lessons.map(el => {
                                    return <Col key={el.lesson} span={4}>
                                        <Card onClick={() => handleShowLevels(el)}
                                              hoverable
                                              title={`Урок ${el.lesson}`} bordered={false}>
                                            {el.title}
                                        </Card>
                                    </Col>
                                })
                            }
                        </Row>
                        : <Row gutter={16}>
                            <PageHeader
                                className="site-page-header"
                                onBack={() => router.push('/level/a0')}
                                title={`Уровень ${query.id}, урок ${query.lesson}`}
                                subTitle={"Уроки"}
                            />
                        </Row>
                }

                {
                    activeLesson && <>
                        {
                            sentences.map(el => {
                                return <SentencesItem id={+el.id} errors={el.errors} correctly={el.correctly} rus={el.rus} eng={el.eng}/>
                            })
                        }
                    </>
                }

            </div>

        </div>
    </MainLayout>;
};

export default LevelItem

export const getServerSideProps = wrapper.getServerSideProps(async ({query, store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTodos(query.id as string, query.lesson as string))
    return {
        props: {
            query: query,
        }
    }
})
