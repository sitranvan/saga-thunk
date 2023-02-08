import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HackerNews from './features/HackerNews'
// import { useSelector } from 'react-redux'
// import Counter from './features/Counter'

import { getNews } from './sagas/news/newsSlice'
// import Generator from './Generator'
function App() {
    // const count = useSelector((state) => state.counter.count)
    // const count = useSelector((state) => state.value)

    // saga
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    const hits = useSelector((state) => state.news.hits)
    console.log(hits)

    return (
        <div className='text-center p-10 w-screen'>
            {/* <Counter />
            <h2 className='my-4 text-purple-600 font-semibold text-xl'>
                App.js: Value taken from the features Counter <br />
                <span className='inline-block rounded-full w-10 h-10 leading-10 text-center mt-2 text-white bg-red-400'>
                    {count}
                </span>
            </h2> */}
            {/* <Generator /> */}
            <HackerNews />
        </div>
    )
}

export default App
