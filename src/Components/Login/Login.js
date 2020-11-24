import React from 'react'
import './login.css'

function Login() {
  return (
    <div className="login_input_container">
      <p>Email:</p>
      <input
        maxLength="100"
        placeholder="Enter Email"
        name="email"
        onChange={(e) => {
          this.handleInput(e)
        }}
      />
      <p>Password:</p>
      <input
        type="password"
        maxLength="20"
        placeholder="Enter Password"
        name="password"
        onChange={(e) => {
          this.handleInput(e)
        }}
      />
      <button
        onClick={() => {
          this.handleLogin()
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login
