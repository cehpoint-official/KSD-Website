import React, { useEffect, useState } from 'react'

const QuePage = () => {

    const [firstButton, setFirstButton] = useState(false)
    const [secondButton, setSecondButton] = useState(false)
    const [thirdButton, setThirdButton] = useState(false)
    const [fourButton, setFourButton] = useState(false)
    const [fourFive, setFourFive] = useState(false)

    useEffect(() => {
        document.addEventListener("click", () => {
            setFirstButton(false)
            setSecondButton(false)
            setThirdButton(false)
            setFourButton(false)
            setFourFive(false)
        })
        return () => {
            document.removeEventListener("click", () => {
                setFirstButton(false)
                setSecondButton(false)
                setThirdButton(false)
                setFourButton(false)
                setFourFive(false)
            })
        }
    }, [])
    return <div className='my-20 py-6 px-10 bg-white bg-opacity-80'>
        <div className='flex-col text-center items-center mt-28 mb-10'>
            <i className='text-2xl text-slate-600 '>Just Find Your Answers Below ----</i>
            <p className='md:text-6xl text-4xl font-bold mt-4'>
                FREQUENTLY
                ASKED QUECTION
            </p>

        </div>


        <div className='lg:mx-28 md:20 mx-10 text-xl mb-20 '>
            <div className='flex justify-between items-center py-4 px-2 border-b-2 border-slate-400'>
                <button onClick={e => {
                    e.stopPropagation()
                    setFirstButton(!firstButton)
                }}>
                    What are the services offered by KSD technologies?
                </button>
                <button
                    onClick={e => {
                        e.stopPropagation()
                        setFirstButton(!firstButton)
                    }}>
                    <i className={`z-50 ${!firstButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                </button>
            </div>

            <div onMouseLeave={e => setFirstButton(false)}
                onClick={e => setFirstButton(false)}
                className={` z-50 ${!firstButton ? "hidden" : ""}  bg-slate-300`}>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    1. Custom software development.
                </p>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    2. IT consulting.
                </p>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    3. Technical support.
                </p>
            </div>




            <div className='flex justify-between items-center py-4 px-2 border-b-2 border-slate-400'>
                <button onClick={e => {
                    e.stopPropagation()
                    setSecondButton(!secondButton)
                }}>
                    What is reverse engineering?
                </button>
                <button
                    onClick={e => {
                        e.stopPropagation()
                        setSecondButton(!secondButton)
                    }}>
                    <i className={`z-50 ${!secondButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                </button>
            </div>
            <div
                onMouseLeave={e => setSecondButton(false)}
                onClick={e => setSecondButton(false)}
                className={` z-50 ${!secondButton ? "hidden" : ""}  bg-slate-300`}>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    1. Analyzing a product's system to understand its design and functionality.


                </p>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    2. Taking apart an object to see how it works, often to replicate or enhance the object.
                </p>

                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    3. Reconstructing software source code from binary code.
                </p>
            </div>

            <div className='flex justify-between items-center py-4 px-2 border-b-2 border-slate-400'>
                <button onClick={e => {
                    e.stopPropagation()
                    setThirdButton(!thirdButton)
                }}>
                    What is reverse engineering?
                </button>
                <button onClick={e => {
                    e.stopPropagation()
                    setThirdButton(!thirdButton)
                }}>
                    <i className={`z-50 ${!thirdButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                </button>
            </div>

            <div
                onMouseLeave={e => setThirdButton(false)}
                onClick={e => setThirdButton(false)}
                className={` z-50 ${!thirdButton ? "hidden" : ""}  bg-slate-300`}>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    1. Dissecting a product to explore its design and architecture.
                </p>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    2.Rebuilding a software program from its compiled form back to source code.
                </p>

                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    3. Extracting knowledge or design information from anything man-made.
                </p>
            </div>

            <div className='flex justify-between items-center py-4 px-2 border-b-2 border-slate-400'>
                <button onClick={e => {
                    e.stopPropagation()
                    setFourButton(!fourButton)
                }}>
                    What is reverse engineering?
                </button>
                <button onClick={e => {
                    e.stopPropagation()
                    setFourButton(!fourButton)
                }}>
                    <i className={`z-50 ${!fourButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                </button>
            </div>

            <div
                onMouseLeave={e => setFourButton(false)}
                onClick={e => setFourButton(false)}
                className={` z-50 ${!fourButton ? "hidden" : ""}  bg-slate-300`}>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    1. Dismantling an item to understand its components and operation.
                </p>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    2. Reconstructing code or blueprints from finished products.
                </p>

                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    3. Learning how things work to duplicate or enhance them.
                </p>
            </div>
            <div className='flex justify-between items-center py-4 px-2 '>
                <button onClick={e => {
                    e.stopPropagation()
                    setFourFive(!fourFive)
                }}>
                    What is 3D scanning?
                </button>
                <button onClick={e => {
                    e.stopPropagation()
                    setFourFive(!fourFive)
                }}>
                    <i className={`z-50 ${!fourFive ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                </button>
            </div>

            <div
                onMouseLeave={e => setFourFive(false)}
                onClick={e => setFourFive(false)}
                className={` z-50 ${!fourFive ? "hidden" : ""}  bg-slate-300`}>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    1. Capturing digital 3D models of physical objects using specialized cameras or lasers.
                </p>
                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    2. Creating precise geometric datasets representing an object's surface.
                </p>

                <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                    3. A process to measure and record the exact shape and size of real-world environments or objects.
                </p>
            </div>

        </div>
    </div >
}

export default QuePage