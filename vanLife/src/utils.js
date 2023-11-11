import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = false
    
    if (!isLoggedIn) {
      //Due to an issue with mirage.js -- this workaround is provided to work with react router 6, per this article: https://github.com/scrimba/learn-react-router-6#april-21-2023
      const response = redirect('/login')
      response.body = true
      return response
      // throw redirect("src/pages/Login")
    } else {
      return null;
    }
}