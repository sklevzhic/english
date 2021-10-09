import {SentencesAction, SentencesActionTypes, SentenceState} from "../../types/todo";

const initialState: SentenceState = {
    sentences: [],
    levels: ['a0', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'],
    lessons: [],
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
        case SentencesActionTypes.FETCH_LESSONS:
            return {
                ...state,
                lessons: action.payload
            }
        default:
            return state
    }
}