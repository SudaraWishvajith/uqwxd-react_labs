import React from 'react'
import { useDispatch} from 'react-redux'
import increment from '../action'

const MyButton = ()=>{
    let despatch = useDispatch();

    return(
        <button onClick={() =>despatch(increment(1))}>Increase</button>
    )
}

export default MyButton;