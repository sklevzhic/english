import type {NextPage} from 'next'
import {MainLayout} from "../layouts/mainLayout";
import React from "react";
import styles from '../styles/Home.module.scss'
import {useRouter} from "next/router";

const Home: NextPage = (props) => {

    const router = useRouter()

    return (
        <MainLayout>
            <ul className={styles.levels}>
                <li onClick={() => router.push('/levels/a0')} className={styles.level}>A0</li>
                <li onClick={() => router.push('/levels/a1')} className={styles.level}>A1</li>
                <li onClick={() => router.push('/levels/a2')} className={styles.level}>A2</li>
            </ul>
        </MainLayout>
    )
}

export default Home