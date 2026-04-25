import React, { useState } from 'react'

const Contact = () => {
    let [state, setState] = useState(false)
    function handleClick() {
        setState(true)
    }
    return (
        <div className='w-full bg-slate-300 px-40 flex items-center justify-between py-10'>
            <div className='px-10 py-20'>
                <h1 className='text-2xl font-bold'>We are here to Help You  </h1>
                <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700' onClick={handleClick}>Contact Us</button>
                {
                    state ? (
                        <div>
                            <h3>Email: ecart@gmail.com</h3>
                            <h3>Contact: +91 9989778016</h3>
                        </div>
                    ) : null
                }
            </div>
            <img src="https://th.bing.com/th/id/R.f3f3317bd82366ed0c57684f585300c5?rik=i8%2fzsI0Y36ZaVw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fdress%2fdress_PNG43.png&ehk=vWvBr8HnUNIfC8Zpp1nHnADD0lvG%2bFsYEwMsh0j6v3o%3d&risl=&pid=ImgRaw&r=0" alt="" className='w-[800px] h-[350px] object-cover' />

        </div>
    )
}

export default Contact