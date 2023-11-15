import React from "react";
import { useLoaderData, useNavigate, Form } from "react-router-dom";
import { loginUser } from "../api";

export async function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password')
  const data = await loginUser({ email, password });
  console.log(data);
  return null;
}

function Login() {
  // const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setStatus('submitting')
  //   setError(null)
  //   loginUser(loginFormData)
  //     .then(data => {
  //       navigate('/host', {replace: true})
  //     })
  //     .catch(err => setError(err))
  //     .finally(() => setStatus('idle'))
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target
  //   setLoginFormData(prev => ({
  //       ...prev,
  //       [name]: value
  //   }))
  // }
  
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
          <Form method="post" className="login-form flex flex-col w-3/6 my-4">
            <input
                name="email"
                type="email"
                placeholder="Email address"
                className="my-4"
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
            />
            <button 
              disabled={status === 'submitting'} 
              className="my-4 bg-orange-500 text-white hover:bg-white hover:text-orange-500 drop-shadow-xl"
            > 
              {status === 'submitting' ? 'Loggin In' : 'Log In'}
            </button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;