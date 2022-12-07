import React from 'react'
import { useState,useRef } from 'react'

export const CopyApp = () => {
    const [text,setText] = useState("Hola!")
    const [isCopied,setIsCopied] = useState(false)
    const inputRef = useRef()
    
    const handleCopy = ()=>{
       const input = inputRef.current
       input.select()
       document.execCommand("copy")
       setIsCopied(true)
       setTimeout(() => {
        setIsCopied(false)
       }, 2000);
    }
  return (
    <>
        <input ref={inputRef}type="text" value={text} onChange={(e) =>{setText(e.target.value)}}></input>
        <button onClick={handleCopy}>Copy</button>
        <p> {isCopied && "Copiado"}</p>
    </>
  )
}
