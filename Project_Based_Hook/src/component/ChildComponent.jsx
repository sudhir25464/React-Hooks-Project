import React,{memo} from 'react'

function ChildComponent({learning, count}) {
    console.log('child component render')
  return (
    <div>
      
    </div>
  )
}

export default memo(ChildComponent)
