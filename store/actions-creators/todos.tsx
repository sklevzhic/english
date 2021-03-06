import {Lesson, SentencesAction, SentencesActionTypes} from "../../types/todo";
import {Dispatch} from "react";
import axios from "axios";

const URL = 'https://technicsklevzhits.herokuapp.com'
// const URL = 'http://localhost:3004'

export const fetchTodos = (level = 'a0', lesson: string) => {
    return async (dispatch: Dispatch<SentencesAction>) => {
        try {
            const response = await axios.get(`${URL}/english?level=${level.toLowerCase()}${lesson ? '&lesson=' : ""}`)
            dispatch({type: SentencesActionTypes.FETCH_SENTENCES, payload: response.data})
        } catch (e) {
            dispatch({
                type: SentencesActionTypes.FETCH_SENTENCES_ERROR,
                payload: 'Произошла ошибка при получении id'})
        }
    }
}
export const fetchQuestions = (level = 'a0', lesson: string) => {
    return async (dispatch: Dispatch<SentencesAction>) => {
        try {
            if (lesson) {
                const responseSentences = await axios.get(`${URL}/english?level=${level.toLowerCase()}&lesson=${lesson}`)
                dispatch({type: SentencesActionTypes.FETCH_SENTENCES, payload: responseSentences.data})
            } else {
                const responseSentences = await axios.get(`${URL}/english?level=${level.toLowerCase()}${lesson ? '&lesson=' : ""}`)
                let idsSentences = responseSentences.data.map((el: { id: string }) => el.id)
                let url = generatingURLForQuestion(idsSentences)
                const response = await axios.get(`${URL}/english?level=${level.toLowerCase()}${url}`)
                dispatch({type: SentencesActionTypes.FETCH_SENTENCES, payload: response.data})
            }
        } catch (e) {
            dispatch({
                type: SentencesActionTypes.FETCH_SENTENCES_ERROR,
                payload: 'Произошла ошибка при загрузке вопросов'})
        }
    }
}

const generatingURLForQuestion = (arr: string[], count = 20) => {
    let newArr: string[] = []
    for (let i=0; i<=count; i++) {
        let el = Math.floor(Math.random() * arr.length)
        newArr.push(arr[el])
    }
    return newArr.map(el => `&id=${el}`).join("")
}

export const fetchLessons = (level = 'a0') => {

    return async (dispatch: Dispatch<SentencesAction>) => {
        try {
            const response = await axios.get(`${URL}/englishLessons?level=${level.toLowerCase()}`)
            let arr = response.data.map((el: Lesson) => {
                return {...el, visible: false}
            })
            dispatch({type: SentencesActionTypes.FETCH_LESSONS, payload: arr})

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
export const setActiveLevel = (payload: string): SentencesAction => {
    return {type: SentencesActionTypes.SELECT_LEVEL, payload}
}
export const setActiveLesson = (payload: number): SentencesAction => {
    return {type: SentencesActionTypes.SELECT_LESSON, payload}
}



