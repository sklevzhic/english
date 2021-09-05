export interface Sentence {
    id: string | number,
    eng: string,
    rus: string,
    level: string
    lesson: string | number,
    correctly: number
    errors: number
}

export interface SentenceState {
    sentences: Sentence[];
    error: string;
}

export enum SentencesActionTypes {
    FETCH_SENTENCES = 'FETCH_SENTENCES',
    FETCH_SENTENCES_ERROR = 'FETCH_SENTENCES_ERROR',
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

export type SentencesAction = FetchSentencesAction | FetchSentencesErrorAction | ChangeCountAction