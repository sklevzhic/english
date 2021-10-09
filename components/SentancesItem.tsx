import {Button, Card} from "antd";
import React, {useState} from "react";

interface SentencesItem {
    id: number,
    rus: string,
    eng: string,
    correctly?: string | number,
    errors? : string | number
}

const SentencesItem: React.FC<SentencesItem> = ({id, rus, eng, correctly, errors}) => {
    const [show, setShow] = useState<boolean>(false)
    return <Card type="inner" key={id} title={rus}>

        {
            show
                ? <p onClick={() => setShow(false)}>{eng}</p>
                : <Button onClick={() => setShow(true)}>Показать</Button>
        }
    </Card>
}

export default SentencesItem
