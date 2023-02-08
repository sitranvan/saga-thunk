import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
// import createSagaMiddleware from '@redux-saga/core'
import reducers from './reducers'
// import rootSaga from './rootSaga'

// const sageMiddleware = createSagaMiddleware() saga

const store = configureStore({
    reducer: reducers,
    // middleware: (gDM) => gDM().concat(logger, sageMiddleware), saga
    middleware: (gDM) => gDM().concat(logger),
})

// sageMiddleware.run(rootSaga) saga

export default store
