import { combineReducers } from '@reduxjs/toolkit'
import newsSlice from '../thunk/newsSlice'
// import newsSlice from './news/newsSlice'

const reducers = combineReducers({
    news: newsSlice.reducer,
})

export default reducers
