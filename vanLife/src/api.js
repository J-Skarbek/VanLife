import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBRprpue35fX3qMYnC_BpAbB7eiK6VDh54",
  authDomain: "vanlife-553f3.firebaseapp.com",
  projectId: "vanlife-553f3",
  storageBucket: "vanlife-553f3.appspot.com",
  messagingSenderId: "26762075776",
  appId: "1:26762075776:web:dd504d46ad34d33dac5065"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Refactoring the fetching functions

export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.vans
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.vans
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data
}