import {List, ListItem} from '@material-ui/core';
import React from 'react'
import {ToDo} from "../../types/todo";
import styles from 'TodoList.module.scss'
import {TodoItem} from "../TodoItem";

interface TodoListProps {
    todoList: ToDo[]
}

export const TodoList: React.FC<TodoListProps> = ({todoList}) => {
    return <List dense>
        {
            todoList.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })
        }
    </List>;
};