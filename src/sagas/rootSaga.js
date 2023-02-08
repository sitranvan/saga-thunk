import { all, fork } from 'redux-saga/effects'
import mySagaNews from './mySaga'

function* rootSaga() {
    yield all([fork(mySagaNews)])
}

export default rootSaga
