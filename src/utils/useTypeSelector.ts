import { AppRootState } from '@context/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';



const useTypeSelector: TypedUseSelectorHook<AppRootState> = useSelector

export default useTypeSelector