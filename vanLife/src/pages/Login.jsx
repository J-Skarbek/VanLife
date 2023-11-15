import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export async function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting')
    setError(null)
    loginUser(loginFormData)
      .then(data => {
        navigate('/host', {replace: true})
      })
      .catch(err => setError(err))
      .finally(() => setStatus('idle'))
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
          {
            message && <span className="text-4xl text-rose-700 font-extrabold">{message}</span>
          }
          {
            error && <span className="text-4xl text-rose-700 font-extrabold">{error.message}</span>
          }
          <h1>Sign in to your account</h1>
          <form onSubmit={handleSubmit} className="login-form flex flex-col w-3/6 my-4">
            <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                value={loginFormData.email}
                className="my-4"
            />
            <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                value={loginFormData.password}
            />
            <button 
              disabled={status === 'submitting'} 
              className="my-4 bg-orange-500 text-white hover:bg-white hover:text-orange-500 drop-shadow-xl"
            > 
              {status === 'submitting' ? 'Loggin In' : 'Log In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;