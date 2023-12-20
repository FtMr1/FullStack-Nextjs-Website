"use client"

import React from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps{
    id:string
    placeholder: string
    disable?: boolean
    type : string
    required: boolean
    register : UseFormRegister<FieldValues>
    errors:FieldErrors
}

const Input:React.FC<InputProps> = ( {id, placeholder , disable , type , required , register , errors}) => {
    
  return (
    <>
        <input className={`w-full h-12 p-3 rounded-md outline-none my-2 ${errors[id] ? "border border-red-500" : "border border-slate-300"}`} id={id} placeholder={placeholder} type={type} disabled={disable} {...register(id , {required})}/>
    
    </>
  )
}

export default Input