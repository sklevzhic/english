import {Button, Input} from '@material-ui/core';
import React, {useState} from 'react'
import {useInput} from "../../hooks/useInput";
import {useActions} from '../../hooks/useActions';

import styles from "./TodoList.module.scss"
import {AddToDoType} from '../../types/todo';

interface AddTodoItemProps {

}

export const AddToDo: React.FC<AddTodoItemProps> = () => {
    const [isActiveForm, setIsActiveForm] = useState(false)

    const {addTodo} = useActions()
    const sendTodo = () => {
        const todo: AddToDoType = {
            title: title.value,
            completed: false,
        }
        addTodo(todo)
        title.reset()
    }

    const title = useInput('')

    return <div className={styles.addTodo}>
        <Input
            multiline
            className={styles.input}
            {...title}
            onFocus={() => setIsActiveForm(true)}
            fullWidth
            placeholder={"Add To Do"}
        ></Input>
        {
            (isActiveForm && title.value !== '') &&
            <Button variant={"contained"} color={"primary"} onClick={sendTodo}>Send</Button>
        }

    </div>;
};