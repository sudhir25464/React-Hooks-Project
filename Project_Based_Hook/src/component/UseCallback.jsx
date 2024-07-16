import React, { useCallback, useEffect, useState } from 'react'
import ChildComponent from './ChildComponent';

function UseCallback() {
    const [add, setadd] = useState(0)
    const [ childcomponent, setChildcomponet] = useState(0);
  
const learning =useCallback(()=>{
 

    },[childcomponent])


    
  return (
    <>
    
    <div className='mx-20 p-10 bg-slate-100 justify-between '>
        <p className='font-semibold text-3xl mb-2'>UseCallbackHooks</p>
        <p>{add}</p>
<ChildComponent value={learning}  count={childcomponent} />

<button onClick={()=>setadd(add+1)}>ADD VALUE ++</button>
<p>{childcomponent}</p>
<button onClick={()=>setChildcomponet(childcomponent+3)}>count</button>
    </div>
    </>
  )
}

export default UseCallback

