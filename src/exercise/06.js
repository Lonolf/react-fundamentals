// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [value, setValue] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const value = inputRef.current.value
    onSubmitUsername(value)
  }

  const handleChange = event => {
    setValue(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username: </label>
        <input value={value} ref={inputRef} onChange={handleChange} id='usernameInput' type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
