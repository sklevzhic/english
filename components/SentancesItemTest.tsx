import {Button, Card} from "antd";
import React, {useState} from "react";

interface SentencesItemTest {
    id: number,
    rus: string,
    eng: string,
    correctly?: string | number,
    errors? : string | number
}

const SentencesItemTest: React.FC<SentencesItemTest> = ({id, rus, eng, correctly, errors}) => {
    const [show, setShow] = useState<boolean>(false)
    return <Card type="inner" key={id} title={rus}>

        {
            show
                ? <p onClick={() => setShow(false)}>{eng}</p>
                : <>
                    <Button onClick={() => setShow(true)}>Показать</Button>

                </>
        }
        <Button type="primary" onClick={() => setShow(true)}>{correctly = 0}</Button>
        <Button type="primary" danger onClick={() => setShow(true)}>{errors = 0}</Button>
    </Card>
}

export default SentencesItemTest
