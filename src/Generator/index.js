import React, { Fragment, useEffect } from 'react'

function Generator() {
    useEffect(() => {
        function* demo() {
            yield 1
            yield 2
            yield 3
        }
        const generator = demo()
        console.log(generator.next()) // 1, false
        console.log(generator.next()) // 2, false
        console.log(generator.next()) // 3, false
        console.log(generator.next()) // undefined, done
    }, [])
    return <Fragment />
}

export default Generator
