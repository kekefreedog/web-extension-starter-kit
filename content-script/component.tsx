import React, { useState } from 'react'
import browser from 'webextension-polyfill'

export default () => {
  const [fact, setFact] = useState('Click the button to fetch a fact!')
  const [loading, setLoading] = useState(false)

  /* async function handleOnClick() {
    setLoading(true)
    const {data} = await browser.runtime.sendMessage({ action: 'fetch' })
    setFact(data)
    setLoading(false)
  } */

  return (
    <div className='absolute top-20 left-20'>
      <div className='flex flex-col gap-4 p-4 shadow-sm bg-gradient-to-r from-purple-500 to-pink-500 w-120 rounded-md'>
        <h1>Extension Shotgun Rodeo</h1>
        {/* <button
          className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm disabled:opacity-75 w-48'
          disabled={loading} onClick={handleOnClick}>Get a Cat Fact!
        </button> */}
        <p className='text-white'>{/* {fact} */}Extension that improves the Shotgun of Rodeo FX.</p>
      </div>
    </div>
  )
}
