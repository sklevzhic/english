import {IconButton, ListItem, ListItemSecondaryAction, ListItemText} from '@material-ui/core';
import React from 'react'
import {ToDo} from "../../types/todo";
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import {useActions} from "../../hooks/useActions";
import {completedTodo} from "../../store/actions-creators/todos";

interface TodoItemProps {
    todo: ToDo
}

export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {

    const { deleteTodo, completedTodo } = useActions()
    return <ListItem disabled={todo.completed} button>
        <ListItemText primary={todo.title} style={{paddingRight: "25px"}}/>
        <ListItemSecondaryAction>
            {
                !todo.completed && <IconButton edge="end" aria-label="done" onClick={() => completedTodo(todo.id, todo.completed)}>
                    <DoneIcon/>
                </IconButton>
            }
            <IconButton edge="end" aria-label="delete" onClick={() => (deleteTodo(todo.id))}>
                <CloseIcon/>
            </IconButton>
        </ListItemSecondaryAction>


    </ListItem>;
};