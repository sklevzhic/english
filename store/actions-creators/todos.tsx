import {SentencesAction, SentencesActionTypes} from "../../types/todo";
import {Dispatch} from "react";
import axios from "axios";

const URL = 'https://technicsklevzhits.herokuapp.com'
// const URL = 'http://localhost:3004'

export const fetchTodos = () => {
    return async (dispatch: Dispatch<SentencesAction>) => {
        try {
            const response = await axios.get(`${URL}/english?level=a0&lesson=1`)
            dispatch({type: SentencesActionTypes.FETCH_SENTENCES, payload: response.data})
        } catch (e) {
            dispatch({
                type: SentencesActionTypes.FETCH_SENTENCES_ERROR,
                payload: 'Произошла ошибка при загрузке'})
        }
    }
}

export const changeCount = (id: number | string, type: string, value: number) => {
    return async (dispatch: Dispatch<SentencesAction>) => {
        try {
            const response = await axios.patch(`${URL}/english/${id}`, {[type]: value})
            dispatch({type: SentencesActionTypes.CHANGE_COUNT, payload: response.data})
        } catch (e) {
            dispatch({
                type: SentencesActionTypes.FETCH_SENTENCES_ERROR,
                payload: 'Произошла ошибка при загрузке'})
        }
    }
}



