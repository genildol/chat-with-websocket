'use client'

import { useState } from 'react'

export default function Chat() {
    const [messages, setMessages] = useState([])

    const send = (e) => {
        e.preventDefault()

        const message = e.target.message.value
        e.target.message.value = ''

        setMessages([...messages, message])
    }

    const deleteMessage = (index) => {
        setMessages(messages.filter((_, i) => i !== index))
    }

    return (
        <div className="absolute p-5 h-full w-full mx-auto bg-indigo-500 flex justify-center">
            <div className="w-3/4 p-5 rounded-md mx-auto bg-slate-100">
                {messages.map((message, index) => (
                    <div key={index} className="p-2 bg-white rounded-md mb-2">
                        {message}
                        <button className="float-right" onClick={() => deleteMessage(index)}>❌</button>
                    </div>
                ))}
            </div>

            <form className="absolute rounded-md bottom-2 w-3/4 p-8" onSubmit={send}>
                <textarea placeholder='Digite sua mensagem 📰' autoFocus className='w-full text-2-lg p-4 rounded-md mb-2' name="message" />
                <button
                    className='w-full text-2-lg p-4 font-semibold rounded-md bg-indigo-500 text-white'
                    type="submit"> Enviar ✈️</button>
            </form>
        </div>
    )
}