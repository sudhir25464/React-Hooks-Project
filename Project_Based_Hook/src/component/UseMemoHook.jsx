import React, { useMemo, useState } from 'react'

function UseMemoHook() {

    const [count1, setCount1] = useState(0);
    const [number, setNumber] = useState(0);

    const iseven = useMemo(() => {


        let i = 0;
        while (i < 1000000000) i++;

        return count1 % 2 === 0
    }, [count1]);

    // const iseven = () => {
    //     let i = 0;
    //     while (i < 1000000000) i++;

    //     return count1 % 2 === 0
    // }

    const countIncrease = () => {
        setCount1(count1 + 1);
    }



    const numberIncrease = () => {
        setNumber(number + 1);
    }
    return (
        <div className='bg-green-100  justify-center justify-items-center p-10'>

            <p className='p-4'>Exemple of use memo hooks here optimize perfomance  clock </p>
            <button className='bg-red-500 px-5 py-1' onClick={countIncrease}> count ++  - {count1}</button>

            <span>{iseven ? 'even' : 'odd'}</span>
            <button className='bg-red-500 px-5 py-1' onClick={numberIncrease}>Number ++  - {number} </button>


        </div>
    )
}

export default UseMemoHook
