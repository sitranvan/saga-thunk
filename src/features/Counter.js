import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementNumber } from '../redux-toolkit/counterSlice'
import useDarkMode from '../hooks/useDarkMode'
// import { decrement, increment, incrementNumber } from '../redux-core/actions'
const NUMBER = 10
function Counter() {
    const [colorTheme, setTheme] = useDarkMode()
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        // dispatch(increment()) => from '../redux-core/actions'
        dispatch(increment())
    }

    const handleDecrement = () => {
        // dispatch(decrement()) => from '../redux-core/actions'
        dispatch(decrement())
    }

    const handleIncrementNumber = () => {
        // dispatch(incrementNumber(NUMBER)) => from '../redux-core/actions'
        dispatch(incrementNumber(NUMBER))
    }

    // dark mode
    const handleToggle = () => {
        setTheme(colorTheme)
    }
    return (
        <div className='flex flex-col mx-auto p-5 rounded-md items-center  bg-white dark:bg-black shadow w-[250px]'>
            <h1 className='text-4xl font-bold text-blue-400 dark:text-white mb-4'>Counter</h1>
            <h2 className='text-blue-700 dark:text-white font-bold text-3xl mb-5'>{count}</h2>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='px-5 py-3 rounded-md bg-blue-300 dark:bg-white' onClick={handleDecrement}>
                    <AiOutlineMinus color='blue' />
                </button>
                <button className='px-5 py-3 rounded-md bg-blue-300 dark:bg-white' onClick={handleIncrement}>
                    <AiOutlinePlus color='blue' />
                </button>
                <button
                    className='flex items-center text-blue-700 dark:bg-white px-5 py-3 rounded-md bg-blue-300'
                    onClick={handleIncrementNumber}
                >
                    <AiOutlinePlus color='blue' /> {NUMBER}
                </button>
            </div>
            <button className='mt-6 mb-3' onClick={handleToggle}>
                {colorTheme === 'dark' ? (
                    <MdDarkMode fontSize='30px' />
                ) : (
                    <BsFillSunFill fontSize='30px' color='yellow' />
                )}
            </button>
        </div>
    )
}

export default Counter
