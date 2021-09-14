import React, {useState} from 'react'
import {MainLayout} from "../../layouts/mainLayout";

import { Card, Col, Row } from 'antd';
import router from "next/router";

interface ComponentProps {

}

const LevelItem: React.FC<ComponentProps> = () => {

    return <MainLayout>
        <div>
            <div className="site-card-wrapper">
                <Row gutter={16}>

                    {
                        [
                            { level: "a0", lesson: "2", title: "was/were" },
                            { level: "a0", lesson: "4", title: "to be" },
                            { level: "a0", lesson: "6", title: "to be" },
                            { level: "a0", lesson: "8", title: "to be" },
                            { level: "a0", lesson: "10", title: "to be" }

                        ].map(el => {
                            return <Col span={4}>
                                <Card  onClick={() => router.push(`/level/${el.level}?lesson=${el.lesson}`)} hoverable key={el.lesson} title={`Урок ${el.lesson}`} bordered={false}>
                                    {el.title}
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </div>

        </div>
    </MainLayout>;
};

export default LevelItem

// interface ComponentProps {
//
// }
//
// const LevelItem: React.FC<ComponentProps> = () => {
//
//     const {sentences} = useTypedSelector(state => state.sentence)
//     debugger
//     const [proffers, setProffers] = useState(sentences)
//     const router = useRouter()
//     return <MainLayout>
//
//         <ul>
//             {
//                 proffers.map(el => {
//                     return <li key={el.id}>{el.rus} - {el.eng}</li>
//                 })
//             }
//         </ul>
//     </MainLayout>;
// };
//
// export default LevelItem
//
// export const getServerSideProps = wrapper.getServerSideProps(async ({params, store}) => {
//     const dispatch = store.dispatch as NextThunkDispatch
//     await dispatch(await fetchTodos())
// })

