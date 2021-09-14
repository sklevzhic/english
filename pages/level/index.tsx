import React from 'react'
import {MainLayout} from "../../layouts/mainLayout";
import styles from "../../styles/Home.module.scss";
import {Button} from "antd";
import router from 'next/router';


interface LevelProps {

}

const Level: React.FC<LevelProps> = () => {
    return <MainLayout>
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
    </MainLayout>;
};

export default Level