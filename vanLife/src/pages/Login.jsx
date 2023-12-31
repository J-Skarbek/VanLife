import React from "react";
import { 
  useLoaderData, 
  useActionData, 
  useNavigation, 
  Form, 
  redirect 
} from "react-router-dom";
import { loginUser } from "../api";

export async function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const pathname = new URL(request.url).searchParams.get("redirectTo") || '/host';

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('loggedin', true);
    console.log(data, 'The login event is triggered');
    //Due to an issue with mirage.js -- the next three lines are a workaround to using a simple redirect call
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch(err) {
    return err.message;
  }
}

function clearStorage() {
  console.log('storage cleared')
  return localStorage.removeItem('loggedin')
}

function Login() {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();
  
  return (
    <div className="main flex justify-center pb-4 w-screen max-w-7x min-h-screen">
      <div className="flex flex-col pb-4 w-screen max-w-7xl">
        <div className="login-container">
          {
            message && <span className="text-4xl text-rose-700 font-extrabold">{message}</span>
          }
          {
            errorMessage && <span className="text-4xl text-rose-700 font-extrabold">{errorMessage}</span>
          }
          <h1>Sign in to your account</h1>
          <Form 
            replace 
            method="post" 
            className="login-form flex flex-col w-3/6 my-4"
          >
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
              disabled={navigation.state === 'submitting'} 
              className="my-4 bg-orange-500 text-white hover:bg-white hover:text-orange-500 drop-shadow-xl"
            > 
              {navigation.state === 'submitting' ? 'Loggin In' : 'Log In'}
            </button>
          </Form>
        </div>
        <button onClick={clearStorage}>Clear Storage</button>
      </div>
    </div>
  )
}

export default Login;