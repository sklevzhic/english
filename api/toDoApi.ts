import {ToDo} from "../types/todo";
import {AxiosInstance} from 'axios'

export const ToDoApi = (instance: AxiosInstance) => {
    return {
        addToDo: async (form: { title: string }): Promise<ToDo[]> => {
            const { data } = await instance.post('/todos', form)
            return data
        }
    }
}