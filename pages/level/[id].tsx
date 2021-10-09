import React, {useEffect, useState} from 'react'
import {MainLayout} from "../../layouts/mainLayout";

import {Button, Card, Col, Modal, PageHeader, Row} from 'antd';
import router from "next/router";
import {NextThunkDispatch, wrapper} from '../../store';
import {fetchLessons, fetchTodos} from '../../store/actions-creators/todos';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SentencesItem from '../../components/SentancesItem';
import { Dialog } from '../../components/Dialog';

interface ComponentProps {
    query: {
        id?: string,
        lesson?: string
    }
}


const LevelItem: React.FC<ComponentProps> = ({query}) => {

    const {sentences, lessons} = useTypedSelector(state => state.sentence)
    const [activeLesson, setActiveLesson] = useState(query.lesson || null)
    const [activeLevel, setActiveLevel] = useState(query.id || null)

    useEffect(() => {
        setActiveLesson(query.lesson || null)
        setActiveLevel(query.id || null)
    }, [query])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handleShowLevels = (el: { level: string, lesson: string }) => {
        router.push(`/level/${query.id}?lesson=${el.lesson}`)
    }

    return <MainLayout>
        <div>
            <div className="site-card-wrapper">
                {
                    !activeLesson
                        ? <>
                            <PageHeader
                                className="site-page-header"
                                onBack={() => router.push(`/`)}
                                title={`Уровень ${query.id}, урок ${query.lesson}`}
                            />
                            <Row gutter={[24, 24]}>
                                {
                                    lessons.map(el => {
                                        return <Col key={el.lesson}
                                                    xs={{span: 24}}
                                                    sm={{span: 12}}
                                                    md={{span: 6}}
                                                    lg={{span: 6}}
                                                    xl={{span: 4}}
                                                    xxl={{span: 4}}
                                        >
                                            <Card onClick={() => handleShowLevels(el)} extra={ <a
                                                onClick={e => { e.stopPropagation(); showModal()}}
                                            >
                                                Edit
                                            </a>}
                                                  hoverable
                                                  title={`Урок ${el.lesson}`} bordered={true}>
                                                {el.title}
                                            </Card>
                                        </Col>
                                    })
                                }
                            </Row>
                        </>
                        : <>
                            <Row gutter={16}>
                                <PageHeader
                                    className="site-page-header"
                                    onBack={() => router.push(`/level/${query.id}`)}
                                    title={`Уровень ${query.id}, урок ${query.lesson}`}
                                    subTitle={<Button
                                        onClick={() => router.push(`/tests/${query.id}?lesson=${query.lesson}`)}>Проверить
                                        знания</Button>}
                                />
                            </Row>
                            <div>
                                <p>Специальные вопросы в прошедшем времени Where + did +</p>
                            </div>
                        </>
                }
                {
                    activeLesson && <>
                        {
                            sentences.map(el => {
                                return <SentencesItem key={el.id} id={+el.id} errors={el.errors}
                                                      correctly={el.correctly}
                                                      rus={el.rus} eng={el.eng}/>
                            })
                        }
                    </>
                }
            </div>
        </div>
        <Dialog handleCancel={handleCancel} handleOk={handleOk} isModalVisible={isModalVisible}></Dialog>
    </MainLayout>;
};

export default LevelItem

export const getServerSideProps = wrapper.getServerSideProps(async ({query, store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchLessons(query.id as string))
    await dispatch(await fetchTodos(query.id as string, query.lesson as string))
    return {
        props: {
            query: query,
        }
    }
})
