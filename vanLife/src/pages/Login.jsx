import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
        ...prev,
        [name]: value
    }))
  }

  return (
    <div className="main flex justify-center pb-4 w-screen max-w-7x min-h-screen">
      <div className="flex flex-col pb-4 w-screen max-w-7xl">
        <div className="login-container">
          <h1>Sign in to your account</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                value={loginFormData.email}
            />
            <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                value={loginFormData.password}
            />
            <button>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;