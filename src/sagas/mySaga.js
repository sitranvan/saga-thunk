import { takeLatest } from 'redux-saga/effects'
import fetchNews from './news/fetchNews'
import { getNews } from './news/newsSlice'

function* mySagaNews() {
    yield takeLatest(getNews.type, fetchNews)
}

export default mySagaNews
