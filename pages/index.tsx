import type {NextPage} from 'next'
import {MainLayout} from "../layouts/mainLayout";
import React from "react";
import styles from '../styles/Home.module.scss'
import {useRouter} from "next/router";
import {Button, Card, Tooltip} from 'antd';

const {Meta} = Card;


const Home: NextPage = (props) => {

    const router = useRouter()

    return (
        <MainLayout>
            <h4 className={styles.mainTitle}>
                Тренажер Английский язык
            </h4>

            <div className={styles.levelsWrapper}>
                <h4 className={styles.title}>Уровни</h4>
                <div>
                    <p className={styles.subtitle}>Выбрать уровень</p>
                    <ul className={styles.levels}>
                        {['a0', 'a1', 'a2', 'b1', 'b2', 'b3'].map(el => {
                            return <Button
                                size="large"
                                key={el}
                                type="primary"
                                shape="circle"
                                onClick={() => router.push(`/level/${el}`)}
                            > {el.toUpperCase()} </Button>
                        })}
                    </ul>
                </div>

            </div>
        </MainLayout>
    )
}

export default Home