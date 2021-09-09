import React, {useEffect} from "react";
import classes from "../styles/Test.module.scss";
import SelectInArray from "./SelectArray";
import {useActions} from "../hooks/useActions";
import {fetchTodos} from "../store/actions-creators/todos";
import {useDispatch} from "react-redux";

const Filters = () => {
    const {setActiveLevel, setActiveLesson} = useActions()
    const dispatch = useDispatch()

    const [level, setLevel] = React.useState<string | number >("a0");
    const [lesson, setLesson] = React.useState<string | number>('1');
    const aaa = () => {
<<<<<<< HEAD
        // dispatch(fetchTodos(level,lesson))
=======
        dispatch(fetchTodos('a1', 24))
>>>>>>> 722c9c565caff547b3b14e87424a2303848f72c4
    }
    return <>
        <div className={classes.levelWrapper}>
            <SelectInArray title={"Уровень"} arr={["A0", "A1"]} valueSelect={level} setValueSelect={setLevel}/>
            {
                level && <SelectInArray title={"Урок"} arr={["1", "2", "3", "24"]} valueSelect={lesson} setValueSelect={setLesson}/>
            }
        </div>
        <button onClick={aaa}>
            aaa
        </button>
    </>


}

export default Filters