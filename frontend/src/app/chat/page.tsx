import { useState } from 'react'
import Form from 'next/form'

export default function Chat() {
  return (
    <div>
      <main>




        <Form action="/search">
          {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
          <input name="message" />
          <button type="submit">Submit</button>
        </Form>
      </main>

    </div>
  )
}