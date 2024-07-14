import React, { useReducer, useState } from 'react'


const initialstate = 0;

const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decriment':
            return state - 1;
        case 'clear':
            return state = 0;
        default:
            return state;
    }
}
function UseReducerHook() {




    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <>

            <div className='  justify-center justify-items-center items-center p-20 bg-white'>
            <h2 className='p-5'>Use Reducer Hooks</h2>
                < div className="">

                    <p className='mx-10 p-3'>value : {count}</p>
                    <button className='border-spacing-1 me-3 bg-green-400 rounded px-5 py-2 font-medium' onClick={() => { dispatch({ type: 'increment' }) }} >Increment</button>
                    <button className="border-spacing-1 me-3 bg-green-400 rounded px-5 py-2 font-medium" onClick={() => { dispatch({ type: 'decriment' }) }}>Decriment</button>
                    <button className="border-spacing-1 me-3 bg-green-400 rounded px-5 py-2 font-medium" onClick={() => { dispatch({ type: 'clear' }) }}>reset</button>

                </div>

            </div>
        </>
    )
}

export default UseReducerHook
