import { call, put } from 'redux-saga/effects'
import apiNews from '../../api/apiNews'
import { setLoading, setNews } from './newsSlice'

function* fetchNews(action) {
    try {
        yield put(setLoading(true))
        const res = yield call(apiNews.search, { query: action.payload })
        const { hits } = res.data // get data from api
        yield put(setNews(hits))
        yield put(setLoading(false))
    } catch (error) {
        console.log(error)
    }
}

export default fetchNews
