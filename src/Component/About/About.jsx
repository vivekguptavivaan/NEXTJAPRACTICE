import React from 'react'
import { useRouter } from 'next/router'

function About() {
    const routerObject = useRouter()
    function handleClick() {
        routerObject.push('/')
    }
    return (
        <>
            <div>About</div>

            <button onClick={handleClick}>Go to home page</button>
        </>
    )
}

export default About