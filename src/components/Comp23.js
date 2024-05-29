import React,{useContext} from 'react'
import CONTEXT from '../Contextapi'

export default function Comp23(xyz) {
    var ans=useContext(CONTEXT)
  return (
    <div>
        Comp23,{xyz.p3}
    <hr />
    <p>Data from Provider
        {ans}
    </p>

    </div>
  )
}
