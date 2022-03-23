import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { ActionCreators } from '@context/index'


const useActions = () => {
    const dispatch = useDispatch()
    const bindActions = useMemo(() => {
        return bindActionCreators(ActionCreators, dispatch)
    }, [])
    return bindActions
}

export default useActions