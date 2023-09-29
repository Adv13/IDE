import React from 'react'
import { updateCode } from '../features/tabs'
import { useDispatch } from 'react-redux'

export default function CodeTab({code, id}) {
  const dispatch = useDispatch();


  return (
    <textarea 
    onChange={e => dispatch(updateCode({id, value: e.target.value}))}
    value={code}
    spellCheck="false" className='bg-zinc-900 text-slate-50 text-xl p-8 block h-full w-full focus:outline-none resize-none'></textarea>
  )
}
