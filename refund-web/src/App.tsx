import { AuthProvider } from "./contexts/AuthContext"

import { Routes } from "./routes"

export function App() {
  return (
    //<h1 className="text-4xl text-emerald-500 font-bold">Refund</h1>
    <AuthProvider>
      <Routes />  
    </AuthProvider>
  )
}