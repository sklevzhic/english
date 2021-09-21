import {SentencesAction, SentencesActionTypes, SentenceState} from "../../types/todo";

const initialState: SentenceState = {
    sentences: [],
    levels: ['a0', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'],
    lessons: [
        {level: "a0", lesson: "2", title: "was/were"},
        {level: "a0", lesson: "4", title: "to be"},
        {level: "a0", lesson: "6", title: "to be"},
        {level: "a0", lesson: "8", title: "to be"},
        {level: "a0", lesson: "10", title: "to be"},
        {level: "a0", lesson: "12", title: "to be"},
        {level: "a0", lesson: "14", title: "to be"},
        {level: "a0", lesson: "16", title: "to be"},
        {level: "a0", lesson: "18", title: "to be"},
        {level: "a0", lesson: "20", title: "to be"},
        {level: "a0", lesson: "22", title: "to be"},
        {level: "a0", lesson: "24", title: "to be"},
        {level: "a0", lesson: "26", title: "to be"},
        {level: "a0", lesson: "28", title: "to be"},
        {level: "a0", lesson: "30", title: "to be"},
        {level: "a0", lesson: "32", title: "to be"},
        {level: "a0", lesson: "34", title: "Past Simple - Прошеднее простое время (неправильные глаголы)"},
        {level: "a0", lesson: "36", title: "Past Simple - Прошеднее простое время (неправильные глаголы)"},
        {level: "a0", lesson: "38", title: "Past Simple - Прошеднее простое время (неправильные глаголы)"},
        {level: "a0", lesson: "40", title: "Отрицание в прошедшем времени didn't + глагол"},
        {level: "a0", lesson: "42", title: "Вопросительные предложения в прошедшем времени Did +"},
        {level: "a0", lesson: "44", title: "Специальные вопросы в прошедшем времени Where + did +"},
        {level: "a0", lesson: "46", title: "Прошедшее время to be i/he/she/it - was, we,you, they - were"},
        {level: "a0", lesson: "48", title: "Отрицание в прошедшем времени to be /wasn't, weren't "},
        {level: "a0", lesson: "50", title: "Cпециальные вопросы to be i/he/she/it - was, we,you, they - were"},
    ],
    error: '',
    activeLesson: '',
    activeLevel: ''

}

export const sentenceReducer = (state = initialState, action: SentencesAction): SentenceState => {
    switch (action.type) {
        case SentencesActionTypes.FETCH_SENTENCES_ERROR:
            return {
                ...state,
                sentences: state.sentences.filter(el => el.id !== action.payload)
            }
        case SentencesActionTypes.FETCH_SENTENCES:
            return {
                ...state,
                sentences: action.payload
            }
        case SentencesActionTypes.CHANGE_COUNT:
            return {
                ...state,
                sentences: state.sentences.map(el => {
                    if (el.id === action.payload.id) {
                        return action.payload
                    }
                    return el
                })
            }
        case SentencesActionTypes.SELECT_LEVEL:
            return {...state, activeLevel: action.payload}
        case SentencesActionTypes.SELECT_LESSON:
            return {...state, activeLesson: action.payload}
        default:
            return state
    }
}