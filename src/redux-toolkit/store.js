import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const store = configureStore({
    reducer: counterSlice.reducer,
})

// logger
// store.subscribe(() => {
//     console.log(`currents state: ${store.getState().counter.value}`)
// })

// store.dispatch(incrementNumber(1))
// store.dispatch(incrementNumber(3))
// store.dispatch(incrementNumber(5))

export default store
