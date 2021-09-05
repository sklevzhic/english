import type {NextPage} from 'next'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../store";
import {fetchTodos} from "../store/actions-creators/todos";
import {MainLayout} from "../layouts/mainLayout";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import {TodoList} from '../components/TodoList';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {AddToDo} from '../components/AddToDo';
import styles from '../styles/Home.module.scss'

const Create: NextPage = (props) => {
    const {todos} = useTypedSelector(state => state.todo)
    return (
        <MainLayout>
            Create
        </MainLayout>
    )
}

export default Create

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTodos())
})
