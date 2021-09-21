import React from 'react'
import {MainLayout} from "../../layouts/mainLayout";
import styles from "../../styles/Home.module.scss";
import {Button} from "antd";
import router from 'next/router';
import {useTypedSelector} from "../../hooks/useTypedSelector";


interface LevelProps {

}

const Level: React.FC<LevelProps> = () => {
    const { levels } = useTypedSelector(state => state.sentence)

    return <MainLayout>
        <ul className={styles.levels}>
            {levels.map(el => {
                return <Button
                    size="large"
                    key={el}
                    type="primary"
                    shape="circle"
                    onClick={() => router.push(`/level/${el}`)}
                > {el.toUpperCase()} </Button>
            })}
        </ul>
    </MainLayout>;
};

export default Level