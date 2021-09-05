import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import TodoActionCreators from '../store/actions-creators'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(TodoActionCreators, dispatch)
}