import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from './store';

// here we predefine custom dispatcher hook base on AppDispatchActions collection from store file with correct redux toolkit types
export const useAppDispatch = () => useDispatch<AppDispatch>();
// here we predefine cutom selector hook based on rootstate type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
