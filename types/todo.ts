export interface Sentence {
    id: string | number,
    eng: string,
    rus: string,
    level: string | number
    lesson: string | number,
    correctly: number
    errors: number
}

export interface SentenceState {
    sentences: Sentence[];
    error: string;
    activeLesson: number | string,
    activeLevel: number | string,
}

export enum SentencesActionTypes {
    FETCH_SENTENCES = 'FETCH_SENTENCES',
    FETCH_SENTENCES_ERROR = 'FETCH_SENTENCES_ERROR',
    SELECT_LESSON = 'SELECT_LESSON',
    SELECT_LEVEL = 'SELECT_LEVEL',
    CHANGE_COUNT = 'CHANGE_COUNT'
}

interface FetchSentencesAction {
    type: SentencesActionTypes.FETCH_SENTENCES,
    payload: Sentence[]
}

interface FetchSentencesErrorAction {
    type: SentencesActionTypes.FETCH_SENTENCES_ERROR,
    payload: string
}

interface ChangeCountAction {
    type: SentencesActionTypes.CHANGE_COUNT,
    payload: Sentence
}

interface SelectLessonAction {
    type: SentencesActionTypes.SELECT_LESSON,
    payload: number
}

interface SelectLevelAction {
    type: SentencesActionTypes.SELECT_LEVEL,
    payload: string
}

export type SentencesAction = FetchSentencesAction | FetchSentencesErrorAction | ChangeCountAction | SelectLessonAction | SelectLevelAction